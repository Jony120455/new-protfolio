import React from 'react';
import resume from '../../assets/jony resume.pdf'

const Cta = () => {
    return (
        <div className='cta'>
            <a href={resume} download className='btn'>Download Resume</a>
            <a href='#contact' className=' btn btn-primary'>Lets Talk</a>
        </div>
    );
};

export default Cta;