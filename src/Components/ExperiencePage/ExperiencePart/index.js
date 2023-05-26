export default function ExperiencePart({exp}) {
    const {img_name, alt_txt, workplace, job_title, desc} = exp
    return (
        <>
            <img className='exp_img' src={require(`../../../images/experience_imgs/${img_name}`)} alt={alt_txt}></img>
            <div className='exp_part'>{workplace}</div>
            <div className='exp_part'>{job_title}</div>
            <div className='exp_part'>{desc}</div>
        </>
    )
}