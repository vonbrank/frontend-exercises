import { createSlice } from "@reduxjs/toolkit";

export const introductionSlice = createSlice({
    name: "introduction",
    initialState: {
        data: [
            {
                title: "摄影",
                lines: [
                    "摄影业务是再来一条团队的主打业务",
                    "成员作品曾被收录入视觉中国图库",
                    "我们承接室内外人像摄影、动物摄影、活动记录等业务",
                ],
                backgroundImageSrc:
                    "https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/home/girl.jpg",
            },
            {
                title: "视频制作",
                lines: [
                    "团队核心成员有丰富的视频制作经验",
                    "曾获跨校比赛奖项",
                    "可为您提供质量上乘的视频作品",
                    "我们曾与南宁市第二中学、广西育杰教育集团达成合作",
                ],
                backgroundImageSrc:
                    "https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/home/street-min.jpg",
            },
            {
                title: "活动策划与执行",
                lines: [
                    "团队核心成员有丰富的活动策划与执行经验",
                    "2022年，我们将作为承办方之一与东湖联合举办",
                    "第一届东湖湖畔音乐节",
                ],
                backgroundImageSrc:
                    "https://vonbrank-images.oss-cn-hangzhou.aliyuncs.com/20220630-OneMoreClipWebPage/home/concert-min.jpg",
            },
        ],
    },
});

export default introductionSlice.reducer;