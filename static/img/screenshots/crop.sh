#!/bin/bash

# Script name: crop_png.sh
# Purpose: Use GraphicsMagick to crop PNG images to a specified size (default: 512x512)
# Adapted for MSYS2 environment, avoids gm alias conflict, removes -quiet option

# Check if GraphicsMagick is available
if ! command -v gm &> /dev/null; then
    echo "Error: GraphicsMagick not found."
    exit 1
fi

# Default cropping mode (centered) and size (512x512)
GRAVITY="Center"
CROP_SIZE="512x512"
OUTPUT_DIR="cropped"

# Usage information
usage() {
    echo "Usage: $0 [options] <input image or directory>"
    echo "Options:"
    echo "  -t    Crop from top-left (default: centered)"
    echo "  -s    Specify crop size (e.g., 256x256, default: 512x512)"
    echo "  -o    Specify output directory (default: ./cropped)"
    echo "  -h    Show this help message"
    echo "Examples:"
    echo "  $0 image.png              # Crop to 512x512 (centered)"
    echo "  $0 -t image.png          # Crop to 512x512 (top-left)"
    echo "  $0 -s 256x256 image.png  # Crop to 256x256 (centered)"
    echo "  $0 ./images              # Batch process PNG files in a directory"
    exit 1
}

# Parse command-line options
while getopts "ts:o:h" opt; do
    case $opt in
        t) GRAVITY="NorthWest" ;;  # Top-left cropping
        s) CROP_SIZE="$OPTARG" ;;
        o) OUTPUT_DIR="$OPTARG" ;;
        h) usage ;;
        *) usage ;;
    esac
done

# Remove parsed options, remaining arguments are input file or directory
shift $((OPTIND-1))

# Check if input is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide an input image or directory."
    usage
fi

# Validate crop size format (e.g., 256x256)
if ! [[ $CROP_SIZE =~ ^[0-9]+x[0-9]+$ ]]; then
    echo "Error: Invalid crop size '$CROP_SIZE'. Use format WIDTHxHEIGHT (e.g., 512x512)."
    exit 1
fi

# Extract width and height from crop size
CROP_WIDTH=$(echo "$CROP_SIZE" | cut -d'x' -f1)
CROP_HEIGHT=$(echo "$CROP_SIZE" | cut -d'x' -f2)

# Check if crop dimensions are positive integers
if [ "$CROP_WIDTH" -le 0 ] || [ "$CROP_HEIGHT" -le 0 ]; then
    echo "Error: Crop dimensions must be positive integers."
    exit 1
fi

INPUT="$1"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Process a single file
process_file() {
    local input_file="$1"
    local filename=$(basename "$input_file")
    local output_file="$OUTPUT_DIR/$filename"

    # Check if the file is a PNG
    if [[ ! "$input_file" =~ \.png$ ]]; then
        echo "Skipping $input_file: Only PNG files are supported"
        return
    fi

    # Get image dimensions
    dimensions=$(command gm identify -format "%w %h" "$input_file" 2>/dev/null)
    read width height <<< "$dimensions"

    if [ -z "$width" ] || [ -z "$height" ]; then
        echo "Error: Unable to read dimensions of $input_file"
        return
    fi

    # Check if the image is smaller than the crop size
    if [ "$width" -lt "$CROP_WIDTH" ] || [ "$height" -lt "$CROP_HEIGHT" ]; then
        echo "Warning: $input_file dimensions ($width x $height) are smaller than $CROP_SIZE, will resize and crop"
        command gm convert "$input_file" -resize "${CROP_WIDTH}x${CROP_HEIGHT}^" -gravity "$GRAVITY" -crop "$CROP_SIZE+0+0" +repage "$output_file" 2>/dev/null
    else
        command gm convert "$input_file" -gravity "$GRAVITY" -crop "$CROP_SIZE+0+0" +repage "$output_file" 2>/dev/null
    fi

    if [ $? -eq 0 ]; then
        echo "Processed: $input_file -> $output_file"
    else
        echo "Error: Failed to process $input_file"
    fi
}

# Main logic
if [ -f "$INPUT" ]; then
    # Input is a single file
    process_file "$INPUT"
elif [ -d "$INPUT" ]; then
    # Input is a directory, batch process PNG files
    for file in "$INPUT"/*.png; do
        if [ -f "$file" ]; then
            process_file "$file"
        fi
    done
else
    echo "Error: $INPUT is not a valid file or directory"
    exit 1
fi
