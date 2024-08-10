export default function ActivityPart(
    {activity}
) {
    const {img_name, alt_txt, organization, title, time_range, desc} = activity
    return (
        <>  
            <div>
                <img 
                    className='grid_img' 
                    src={require(`../../../../images/activity_imgs/${img_name}`)}
                    alt={alt_txt}
                />
            </div>
            <div>{organization}</div>
            <div>{title}</div>
            <div>{time_range}</div>
            <ul>
                {desc.map((bullet, i) => 
                    <li key={i} className='desc_bullet'>{bullet}</li>
                )}
            </ul>
        </>
    )
}
