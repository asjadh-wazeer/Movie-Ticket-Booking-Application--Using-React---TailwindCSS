import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

export const Premier = () => {
    const settings = {
        infinite:true,
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:2,
        InitialSlide:0
    }

    const PremierImages=[
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA1MTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00304431-bjkdhqralc-portrait.jpg",
            alt:"Conjuring",
            title:"Kodiyil Oruvan",
            subtitle:"Action/Drama"

        }

    ]

    return (
    <>
    <Slider {...settings}>
        {PremierImages.map((image)=>(
            <Poster {...image} />
        ))}
    </Slider>
    </>
    )
}
//snd it to the homepage