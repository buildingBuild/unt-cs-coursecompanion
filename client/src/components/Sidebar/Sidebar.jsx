import './Sidebar.css'

export function Sidebar(){





    return(
    <div className='sidebar-contain'>

        <div className='logo-box'>
            <img src='./logo.svg'></img>
            <p>Course Companion</p>
        </div>

        <div className='logo-box'>
        <img src='./courses.svg'></img> 
        <p>Courses</p>
        </div>

        <div className='logo-box'>
        <img src='./professors.svg'></img> 
        <p>Professors</p>
        </div>

<div className='bottom-boxes'>
         <div className='logo-box'>
        <img src='./history.svg'></img> 
        <p>History</p>
        </div>

         <div className='logo-box'>
        <img src='./Icon.svg'></img> 
        <p>Sign up</p>
        </div>

</div>





    </div>
    
    
    
    
    
    )



}