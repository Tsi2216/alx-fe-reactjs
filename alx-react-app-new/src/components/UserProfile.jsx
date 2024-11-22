const UserProfile = (props) => {
    return (
    <div style={{
    border: '1px solid lightgray',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    backgroundColor: 'lightgray',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'center'
    }}>
    <h2 style={{ color: '#333', fontSize: '1.8rem', margin: '0 0 10px' }}>{props.name}</h2>
    <p style={{ fontSize: '1rem', margin: '5px 0' }}>
    Age: <span style={{ fontWeight: 'bold', color: 'lightblue' }}>{props.age}</span>
    </p>
    <p style={{ fontSize: '0.9rem', color: '#666' }}>Bio: {props.bio}</p>
    </div>
    );
    };
    
    export default UserProfile;