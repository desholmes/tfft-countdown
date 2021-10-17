#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Go to dist diretory
cd dist

# Add changes to git.
git add .

# Commit changes.
git commit -m "Updating site $(date)"

# Push source and build repos.
git push origin main