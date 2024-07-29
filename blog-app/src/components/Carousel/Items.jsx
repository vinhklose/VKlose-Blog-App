import { Paper, Button } from '@mui/material'

export default function Item({item}){
    return (
        <Paper>
            <img src={item.image} alt={item.title} className='w-full h-64'/>
            <div className='flex justify-center items-center flex-col'>
                <h2>{item.title}</h2>
                <Button variant="contained">
                        Check it out!
                </Button>
                
            </div>           
        </Paper>
    )
}