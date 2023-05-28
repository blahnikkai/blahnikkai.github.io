export default function ExperiencePart({exp}) {
    const {img_name, alt_txt, workplace, job_title, desc} = exp
    return (
        <>
            <div>
                <img className='exp_img' src={require(`../../../images/experience_imgs/${img_name}`)} alt={alt_txt}></img>
            </div>
            <div>{workplace}</div>
            <div>{job_title}</div>
            <div>{desc}</div>
        </>
    )
}