import React from 'react';

class Profile extends React.Component {
    state = {
        fullName: 'Ahmed Esmat',
        bio: 'A computer engineer',
        profession: 'Student',
        imgSrc: 'https://www.w3schools.com/howto/img_avatar.png',
        date: new Date()
      };
    render () {
        return (
            <div>
                <h1>{this.state.fullName}</h1>
                <h2>{this.state.bio}</h2>
                <h3>{this.state.profession}</h3>
                <img style={{width:200}} src={this.state.imgSrc} alt="Avatar" />
                <h3>Last time the component was mounted {this.state.date.toLocaleTimeString()}</h3>
            </div>
        );
    }
}
export default Profile;