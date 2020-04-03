import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@bit/jakeprins.react-milkshake.grid';
import Card from '@bit/jakeprins.react-milkshake.card';


class Project extends React.Component {


    render() {
        return (
            <Grid>
		<a href="https://clintronix.webhostingforstudents.com/my_projects/showcase/"><Card
        image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
        title='React Milkshake Starterkit'
        text='Start building some stuff with styled cards like this'
        className='example-card'
        href="https://clintronix.webhostingforstudents.com/my_projects/showcase/"
      /></a>
			<Card
        image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
        title='React Milkshake Starterkit'
        text='Start building some stuff with styled cards like this'
        className='example-card'
      />
			<Card
        image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
        title='React Milkshake Starterkit'
        text='Start building some stuff with styled cards like this'
        className='example-card'
      />
			<Card
        image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
        title='React Milkshake Starterkit'
        text='Start building some stuff with styled cards like this'
        className='example-card'
      />
	</Grid>
        );
    }
	
}

export default Project;
