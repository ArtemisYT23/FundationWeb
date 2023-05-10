import styled from "styled-components";
import { Sladers } from "../../components/Sladers";
import { BodyInfo } from "../../components/BodyInfo";
import { ContentInfo } from "../../components/ContentInfo";
import { CardInfo } from "../../components/CardInfo";
import { VideoTestimonios } from "../../components/VideoTestimonios";

export const PagesInitial = () => {
    return (
        <>
            <Sladers />
            <BodyInfo />
            <ContentInfo />
            <CardInfo />
            <VideoTestimonios />
        </>
    )
}