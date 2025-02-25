#!/bin/bash

# Loop through all PNG files in the current directory
for img in *.png; do
  # Check if there are any PNG files
  if [[ -f "$img" ]]; then
    # Convert PNG to WebP using cwebp
    cwebp -q 80 "$img" -o "${img%.png}.webp"
    echo "Converted $img to ${img%.png}.webp"
  fi
done
