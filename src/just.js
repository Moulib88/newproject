import { TextField } from '@mui/material';
import './style.css';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
const Arrowfun=()=>{
    const Navigate=useNavigate();
    return(
        <div className='cont12'>
            
            <div className='sidebar'>
                <div className='sidebar-inner'>
                    <div className='sidebar-inner1'>
                    <div>Dash Board</div>
                    </div>
                    <div className='sidebar-inner1'>
                    <div>Profile</div>
                    </div>
                    <div className='sidebar-inner1'>
                    <div>Contact us</div>
                    </div>
                    <div className='sidebar-inner1'>
                    <div>Help</div>
                    </div>
                    <div className='sidebar-inner1'>
                    <div>Email</div>
                    </div>
                    <div className='sidebar-inner1'>
                    <div>Dash Board</div>
                    </div>
                    <div className='sidebar-inner1'>
                    <div>Deactivate</div>
                    </div>
                    <div onClick={()=>{Navigate('/')}} className='sidebar-inner1'>
                    <div>Logout</div>
                    </div>
                    
                </div>
            </div>
            <div className='page'>
            <div className='text-welcome'>Welcome! Mouli</div>
                <div className='nav'>
                <HomeIcon style={{fontSize:'50px',color:'#797a7a'}}></HomeIcon>
                <TextField style={{width:'90%',marginRight:'30px'}} label="search"></TextField>
                </div>
                {/* <div className='text-welcome'>Welcome!</div> */}
                <div className='main-box'>
                    <div className='main-box-child'>
                        <div className='child1'>
                            <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                        <div className='child1'>
                        <div className='child-inner'>
                                <div style={{marginLeft:'5px',fontSize:'20px'}}>Document</div>
                                <MailIcon  style={{color:'gray',marginRight:'10px'}}></MailIcon>
                            </div>
                            <div className='number'>120000</div>
                            <div className='percentage'>17% since last week</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Arrowfun;