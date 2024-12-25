export default function ExperiencePart({exp}) {
    const {img_name, alt_txt, workplace, job_title, time_range, desc, link} = exp
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
            {
                !link &&
                <div>{job_title}</div>
            }
            {
                link &&
                <a href={link}>{job_title}</a>
            }
            <div>{time_range}</div>
            <ul>
                {desc.map((bullet, i) => 
                    <li key={i} className='desc_bullet'>{bullet}</li>
                )}
            </ul>
        </>
    )
}