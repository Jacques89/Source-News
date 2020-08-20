import React from 'react';

const LoadingPage = () => {
    const loading = () => {
        return (
            {
                width: '100%',
                height: '100vh',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
            }
        )
    }
    return (
        <div style={loading()}>
            <p style={{ fontSize: '3rem' }}>loading...</p>
        </div>
    )
}

export default LoadingPage;