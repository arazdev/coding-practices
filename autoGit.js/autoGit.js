const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

// Set up the repository path
const repoPath = '/Users/araz/Documents/3.DEV_WORKS/project-works/github_experience/coding-practices';  // Ensure this path is correct and writable
const git = simpleGit(repoPath);

// Function to make changes to the code
function makeChanges() {
    const filePath = path.join(repoPath, 'test.txt');

    // Example: Add some text
    const textToAdd = `\nAdding some experience at ${new Date().toLocaleTimeString()}`;
    fs.appendFileSync(filePath, textToAdd, 'utf8');
}

// Function to automate git operations
async function automateGit() {
    try {
        // Pull the latest changes from the correct branch
        await git.pull('origin', 'main');  // Change 'main' to 'master' if that's your branch name

        // Make changes
        makeChanges();

        // Stage changes
        await git.add('./*');

        // Commit changes
        await git.commit('Automated commit to increase experience');

        // Push changes to the correct branch
        await git.push('origin', 'main');  // Change 'main' to 'master' if that's your branch name
    } catch (error) {
        console.error('Error during git operations:', error);
    }
}

// Schedule the script to run every 10 seconds
cron.schedule('*/10 * * * * *', () => {
    console.log('Running automated git script');
    automateGit();
});
