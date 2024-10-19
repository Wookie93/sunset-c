import { Description } from "../Description"
import { Section } from "../Section"
import { SectionTitle } from "../SectionTitle"
import { Title } from "../Title"
import NextImage from "next/image";

type Item = {
    title: string;
    url: string;
    width: number;
    height: number;
  };
  
  type ItemsStructure = {
    items: Item[];
  };

  function convertDescToObject(descriptions: string[]): Record<string, string> {
    return descriptions.reduce<Record<string, string>>((acc, description) => {
      const [key, value] = description.split('__');
      if (key && value) {
        acc[key.trim()] = value.trim(); 
      }
      return acc;
    }, {});
  }
  

  function convertImageToObject(items: ItemsStructure): Record<string, Item> {
    return items.items.reduce<Record<string, Item>>((acc, item) => {
      acc[item.title] = item; 
      return acc;
    }, {});
  }

export const OurTeamSection = ({data}: any) => {
console.log(data.imagesCollection)


    const description = convertDescToObject(data.peopleDescriptions);
    const image = convertImageToObject(data.imagesCollection)

    return (
<Section className="container mx-auto !pb-0">
<div className="space-y-2">
    <SectionTitle
        level={3}
        className="after:bottom-1.5 after:top-auto after:max-w-32"
    >
        {data.title}
    </SectionTitle>
</div>
<div className="mt-16 grid grid-cols-1 gap-10 tabletLg:grid-cols-2">
    {data.peopleNames.map((person:string) => (
    <div className="space-y-4" key={person}>
        <div className="relative h-lvh max-h-[13.75rem] overflow-hidden laptop:max-h-[18.75rem]">
            <NextImage
                src={image[person.toLocaleLowerCase()].url}
                alt={image[person.toLocaleLowerCase()].title}
                fill
            />
        </div>
        <Title>{person}</Title>
        <Description className="text-gray-600">
            {description[person]}
        </Description>
        </div>
    ))}
</div>
</Section> 
    )
}