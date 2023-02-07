import { skills, experiences, projects } from './profile'

export const SkillsSection = () => {
    return (
        <>
            <div className='row card_body2 skills_section'>
                <div className='col-md-6'>
                    <div
                        style={{
                            background: '#202023'
                        }}
                        className='text-white'>
                        <div className='card-body'>
                            <h1>Skills</h1>
                            {/* skill progress */}
                            {
                                skills.map(({ skill, percentage }, i) => (
                                    <div className='py-3' key={i}>
                                        <h5>{skill}</h5>
                                        <div className='progress bg-dark'>
                                            <div
                                                className='progress-bar'
                                                role='progressbar'
                                                style={{
                                                    width: `${percentage}%`,
                                                    background: '#39FADB'
                                                }}>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
