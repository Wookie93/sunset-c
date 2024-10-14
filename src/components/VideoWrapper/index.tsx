export const VideoWrapper = ({videoUrl}: {videoUrl: string}) => {
    return (
    <div className="col-span-1 max-tabletLg:order-2 max-tabletLg:pt-[3.125rem] tabletLg:col-span-6">
        <div className="relative flex h-lvh max-h-[24.375rem] items-center justify-center laptop:max-h-[32.75rem]">
            <video controls >
                <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
    </div>

    )
}
