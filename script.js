// In script.js
function searchFriends() {
    console.log('Searching for friends...');

    // Example: Pretend we searched and found some friends
    const searchResults = document.getElementById('searchResults');
    // Clear previous results
    searchResults.innerHTML = '';

    // Simulated search result
    const friends = ['John Doe', 'Jane Smith'];
    friends.forEach(friend => {
        const friendElement = document.createElement('div');
        friendElement.textContent = friend;
        searchResults.appendChild(friendElement);

        // Add a button for sending friend requests
        const sendRequestButton = document.createElement('button');
        sendRequestButton.textContent = 'Send Friend Request';
        sendRequestButton.onclick = function() { alert(`Friend request sent to ${friend}!`); };
        friendElement.appendChild(sendRequestButton);
    });
}

function sendFriendRequest() {
    console.log('Sending friend request...');
    // Since this function will be dynamically tied to buttons, the alert is moved to the button's onclick in searchFriends
}
