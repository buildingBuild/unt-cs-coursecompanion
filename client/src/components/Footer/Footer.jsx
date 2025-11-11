import './Footer.css'
export function Footer(){



    return(<>
     <div className='Footer-contain'>
        <p>
      <a href="https://github.com/buildingBuild/unt-cs-coursecompanion/issues" target="_blank" > Report an issue </a>
    </p>
    <p>© {new Date().getFullYear()} Course Companion. All rights reserved </p>
     <p>v1.0 Beta</p>
   </div>
    
    </>)
}