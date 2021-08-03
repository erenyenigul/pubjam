import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Form, Button , ListGroup, Row, Col} from 'react-bootstrap'
import { startSetUser } from '../../action/user';
import { searchTrack } from '../../request/main';

export const AddToQueue = (props) => {
    const [songName, setSongName] = useState('');
    const [displayedSongs, setDisplayedSongs] = useState([]);

    useEffect(() => {
       props.dispatch(startSetUser());
    }, []);

    const onSongNameChange = async (e) => {
        setSongName(e.target.value);
        setDisplayedSongs(await searchTrack(props.accessToken, songName));
        console.log(displayedSongs)
    };

    const onAddButtonClick = async (e) => {
        console.log('hey');
    };

    return (
        <div className="container">
            <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className="mb-3" >
                    <Form.Label>Song Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter song name" value={songName} onChange={onSongNameChange} autoComplete="off" />
                </Form.Group>
            </Form>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item disabled>
                    <Row onClick={onAddButtonClick}>
                        <Col>Name</Col>
                        <Col>Album</Col>
                        <Col>Artist(s)</Col>
                    </Row>
                </ListGroup.Item>
            {displayedSongs.map((song)=>(
                 <ListGroup.Item action onClick={onAddButtonClick}>
                <Row onClick={onAddButtonClick}>
                    <Col>{song.name}</Col>
                    <Col>{song.album.name}</Col>
                    <Col>{song.artists.map((artist, index, arr)=><span>{artist.name}{arr.length-1 == index ? '': ','} </span>)}</Col>
                </Row>     
                </ListGroup.Item>
            ))}
            </ListGroup>
        </div>
    )
}

const mapStateToProps = (state) => ({
    accessToken: state.user.access_token,
    dispatch: state.dispatch    
})


export default connect(mapStateToProps)(AddToQueue)
