async function getLLMResponse(prompt) {
    return new Promise((resolve) => {
        const timeout = Math.random() * (15000 - 5000) + 5000;
        setTimeout(() => {
            resolve('This is a mock response from the LLM based on user input');
        }, timeout);
    });
}

async function getAutoResponse(senderName, recipientName) {
    const prompt = `User ${recipientName} is busy. Generate a polite auto-response message from ${recipientName} to ${senderName}.`;
    
    try {
        const response = await Promise.race([
            getLLMResponse(prompt),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('LLM Timeout')), 10000)
            )
        ]);
        
        return response;
    } catch (error) {
        return `Hi ${senderName}, I'm currently busy and will respond when I'm available. - ${recipientName}`;
    }
}

module.exports = { getLLMResponse, getAutoResponse }; 