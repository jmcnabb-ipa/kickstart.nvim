
# Delete the existing system nvim directory if it exists
rm -rf ~/.config/nvim

# Create a link from the system folder pointing to your git repo
ln -s ~/path/to/your/forked/kickstart.nvim ~/.config/nvim
