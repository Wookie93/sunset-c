
import { Description } from "../Description"
import { Section } from "../Section"
import { SectionTitle } from "../SectionTitle"
import { Title } from "../Title"
import NextImage from "next/image";
import { VideoWrapper } from "../VideoWrapper";
import { ButtonLink } from "../ButtonLink";

const ContentSectionText = ({paragraph, className, classNameForTextWrap}: any) => {
    const {title, description, image} = paragraph;

    return(
        <div className={className}>
            {image ? <NextImage  width={200} height={200} alt="icon" src={image.url} /> : null}
            <div className={classNameForTextWrap}>
                <Title>{title}</Title>
                <Description className="text-gray-600">
                    {description}
                </Description>
            </div>
        </div>
    )
}

export const ContentSection = ({data}: any) => {

    const {imageAtRight, hasGrayBcg, title, image, contentCollection, buttonsSectionCollection} = data;
    const ifVideo = image ? image.url.includes('videos') : null

    return(
        <>
        {image ? 
                <Section className={`${hasGrayBcg? 'bg-gray-100' : ''} mx-auto tablet:container max-tablet:pb-0`}>
                <div className="grid tabletLg:grid-cols-12">
                    <div
                        className={`${imageAtRight ? 'order-2 content-center space-y-6 px-5 tabletLg:order-1 tabletLg:col-span-5 tabletLg:col-start-1 tabletLg:px-0' 
                            : 'order-2 content-center space-y-6 px-5 tabletLg:col-span-5 tabletLg:col-start-8 tabletLg:px-0'}`}>
                        <SectionTitle level={3}>
                            {title}
                        </SectionTitle>
                        {contentCollection && contentCollection.items.map((content:any) => (
                            <ContentSectionText paragraph={content} className="flex max-w-[28.125rem] flex-row space-x-6" classNameForTextWrap="flex flex-col space-y-2" />
                        ))}
                    </div>
                    {!ifVideo ? 
                    <div className={`${imageAtRight ? 'order-1 col-span-1 pb-[3.125rem] tabletLg:order-2 tabletLg:col-span-6 tabletLg:col-start-7 tabletLg:pb-0' 
                        : 'order-1 col-span-1 pb-[3.125rem] tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:pb-0'}`}>
                        <div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[32.75rem]">
                            <NextImage
                                fill
                                src={image.url}
                                alt={image.title}
                            />
                        </div>
                    </div> : 
                    <VideoWrapper videoUrl={image.url} />
                    }
                </div>
            </Section>
        : 
        <Section className={`${hasGrayBcg? 'bg-gray-100' : ''}`} >
            <div className="container mx-auto">
                <div className="mb-12 flex justify-center laptop:mb-20">
                    <SectionTitle level={3} className="max-w-[21.875rem] text-center">
                        {title}
                    </SectionTitle>
                </div>
                <div className="grid grid-cols-1 tabletLg:grid-cols-3 tabletLg:space-x-10">
                {contentCollection && contentCollection.items.map((content:any) => (
                            <ContentSectionText paragraph={content} className="space-y-6 p-6" classNameForTextWrap="space-y-2"/>
                ))}
                </div>
                {buttonsSectionCollection && 
                    <div className="mt-10 flex flex-col items-center justify-center max-tablet:space-y-4 tablet:flex-row tablet:space-x-6">
                        {buttonsSectionCollection.items.map((btn: any) => (
                            <ButtonLink type="bordered" href={btn.linkTo.slug}>
                                {btn.textOnButton}
                            </ButtonLink>
                         ))}
                    </div>
                }
            </div>
        </Section>
        
        }
        </>
    )
}

