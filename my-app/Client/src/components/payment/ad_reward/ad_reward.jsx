import React, { Component } from 'react';
import Modal from 'react-modal';
import "./ad_reward.css";
Modal.setAppElement('#root'); // This line is needed for accessibility reasons

class Ad_reward extends Component {
    state = {
        videoWatched: false,
        modalIsOpen: false,
    };

    handleVideoEnd = () => {
        this.setState({ videoWatched: true });
    };

    handleClaimReward = () => {
        alert('Reward claimed!');
        this.setState({ modalIsOpen: false });
        this.state.videoWatched = false;
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });

        // Simulate the video duration
        setTimeout(this.handleVideoEnd, 30000); // 30 seconds
    };

    render() {
        return (
            <div className='watch-video-card'>
                <h2>Watch a video to earn rewards</h2>
                <button onClick={this.openModal}>Watch Video</button>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.state.videoWatched ? this.handleClaimReward : undefined}
                    contentLabel="Watch Video Modal"
                    style={{
                        content: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        },
                        overlay: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }}
                >
                    <iframe 
                        className='video-player'
                        src="https://www.youtube.com/embed/C0lKu-0jik0?autoplay=1" 
                        title="YouTube video player" 
                    ></iframe>      
                    {this.state.videoWatched && (
                        <button onClick={this.handleClaimReward}>Claim Reward</button>
                    )}
                </Modal>
            </div>
        );
    }
}

export default Ad_reward;