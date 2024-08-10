export default function ExperiencePart({exp}) {
    const {img_name, alt_txt, workplace, job_title, time_range, desc} = exp
    return (
        <>
            <div>
                <img
                    className='grid_img'
                    src={require(`../../../../images/experience_imgs/${img_name}`)}
                    alt={alt_txt}
                />
            </div>
            <div>{workplace}</div>
            <div>{job_title}</div>
            <div>{time_range}</div>
            <ul>
                {desc.map((bullet, i) => 
                    <li key={i} className='desc_bullet'>{bullet}</li>
                )}
            </ul>
        </>
    )
}