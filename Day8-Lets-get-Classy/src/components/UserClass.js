import React from 'react'

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userInfo:{
                 name: "Dummy",
                 location: "Default",
                 avatar_url: "https://dummy-avtar"
            },
        };

    }

    async componentDidMount() {
        const data = await fetch ('https://api.github.com/users/itspjoriginals');
        const json = await data.json();

        this.setState(
            {
                userInfo:json
            }
        )

        console.log(json);
    }

    render() {

        const{name, location, avatar_url} = this.state.userInfo;

        return (
            <>
            <img className='user-avatar' src={avatar_url}/>
            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
            </>
        )
    }

}

export default UserClass;