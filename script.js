// Function to simulate network delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to simulate fetching user profile
async function fetchUserProfile() {
    try {
        console.log('Task 1: Fetching User Profile...');
        await delay(2000);
        console.log('Successfully fetched user profile!');
    } catch (error) {
        console.error('Failed to fetch user profile.', error.message);
    }
}

// Function to simulate fetching posts
async function fetchUserPosts() {
    try {
        console.log('Task 2: Fetching User Posts...');
        await delay(2000);
        console.log('Successfully fetched user posts!');
    } catch (error) {
        console.error('Failed to fetch user posts.', error.message);
    }
}

// Function to simulate fetching comments
async function fetchComments() {
    try {
        console.log('Task 3: Fetching User Comments...');
        await delay(3000);
        console.log('Successfully fetched user comments!');
    } catch (error) {
        console.error('Failed to fetch comments.', error.message);
    }
}

// Parallel data fetching
fetchUserProfile();
fetchUserPosts();
fetchComments();

// Sequential data fetching
async function getUserContent() {
    await fetchUserProfile();
    await fetchUserPosts();
    await fetchComments();
}

getUserContent();
