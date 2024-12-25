export default function ExperiencePart({exp}) {
    const {img_name, alt_txt, workplace, job_title, link} = exp
    return (
        <>
            <div className='short_item'>
                <img
                    className='short_img'
                    src={require(`../../../../images/experience_imgs/${img_name}`)}
                    alt={alt_txt}
                />
            </div>
            <div className='short_item'>{workplace}</div>
            {
                !link &&
                <div className='short_item'>{job_title}</div>
            }
            {
                link && 
                <a className='short_item' href={link}>{job_title}</a>
            }
        </>
    )
}