import React, {FunctionComponent, MouseEvent, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import President from './assets/president.png';
import VicePresident from './assets/aoi-small.png';
import Background from './assets/student-union-bg-v2.png';
import MobileBackground from './assets/su_mobile.png';
import SUQuestionMark from './assets/su-question-2.png';
import ComingSoon from './assets/coming-soon.png';
import Fade from '@mui/material/Fade';
import ChevronLeftIcon from '@mui/icons-material/ArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ArrowRight';

const StudentUnion: FunctionComponent = ()=>{

    const studentUnionMember = [
        {
            index: 0,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "Promoting Ambassador",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            height: "170",
            profileCompleted: false
        },{
            index: 1,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "General Affairs Personnel",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            profileCompleted: false
        },{
            index: 2,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "Accountant",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            height: "170",
            profileCompaleted: false
        },{
            index: 3,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "Secretary",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            profileCompleted: false
        },{
            index: 4,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "Vice-President",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            height: "170",
            profileCompleted: false
        },{
            index: 5,
            icon: President,
            image: President,
            isSelected: false,
            jpName: "青木 はるな",
            enName: "Aoki Haruna",
            content: "Aoki is a gentle and mature girl, Under her leadership, \n" +
                "the Student Union can always do very well. However,\n" +
                "there was a little argument with one of the members \n" +
                "that seems can never be fixed. ",
            title: "President",
            class: "3年A組",
            classNo: "2",
            birthday: "2005/11/4",
            hobbies: "Drawing, Camping",
            measurements: "34/23/36",
            height: "171",
            profileCompleted: true
        },{
            index: 6,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "Vice-President",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            height: "170",
            profileCompleted: false
        },{
            index: 7,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "General Affairs Personnel",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            height: "170",
            profileCompleted: false
        },{
            index: 8,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "Event Planning Coordinator",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            height: "170",
            profileCompleted: false
        },{
            index: 9,
            icon: SUQuestionMark,
            image: ComingSoon,
            isSelected: true,
            jpName: "?",
            enName: "?",
            content: "???",
            title: "Sport Coordinator",
            class: "?年?組",
            classNo: "?",
            birthday: "????/??/??",
            hobbies: "?",
            measurements: "??/??/??",
            height: "170",
            profileCompleted: false
        },
    ];

    const [studentUnionMemberState, setStudentUnionMemberState] = useState(studentUnionMember);
    const [selectedMember, setSelectedMember] = useState(studentUnionMemberState[5]);
    const [fade, setFade] = useState(true);
    const [hover, setHover] = useState({
        index: -1,
        isHover: false
    });

    useEffect(() => {
    }, [studentUnionMemberState] );

    const webStyle = {
        isMobile : false,
        container : {
            css : {
                height: "auto",
                margin:0,
                backgroundImage : "url("+Background+")",
                backgroundPosition: "top",
                backgroundRepeat: "noRepeat",
                backgroundSize: "cover",
                fontFamily: "FuturaHandwritten",
                position: "relative",
                paddingTop: "10vh",
                zIndex: -2
            },
            grid: {
                spacing: 2
            }
        },
        title: {
            css: {
                height: "auto",
                minHeight: "15vh",
                color: "black",
                textAlign: "center",
                fontSize: "1.5em",
                fontFamily: "BaksoSapi"
            },
            grid: {
                xs: 12
            }
        },
        studentImages: {
            div: {
                css: {
                    marginLeft: "15vw",
                    marginRight: "15vw",
                    display: "inline-flex",
                    width: "100%",
                    height: "15vh",
                }
            },
            css: {
                minHeight: "5vh",
                margin: "auto",
                position: "relative" as const
            },
            grid: {
                xs: 1
            },
            image: {
                css: {
                    position: "relative" as const,
                    borderRadius: "50%",
                    height: "4vw",
                    top: "10%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                },
                questionMarkCss: {
                    position: "relative" as const,
                    borderRadius: "50%",
                    height: "4vw",
                    width: "4vw",
                    top: "20%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    verticalAlign: "middle",
                    fontFamily: "BaksoSapi",
                    color: "#CBCAFE",
                    textAlign: "center",
                    fontSize: "2.7vw"

                },
                backgroundColor: {
                    odd: {
                        backgroundColor: "#ffdef1",
                    },
                    even: {
                        backgroundColor: "#fff8b8",
                    },
                    hover: {
                        backgroundColor: "#ffffff",
                    }
                },
                president: {
                    css: {
                        top: "0",
                        height: "5vw",
                    },questionMarkCss: {
                        top: "0",
                        height: "5vw",
                        width: "5vw",
                        fontSize: "3.5vw"
                    },
                },
                questionMark: {
                    css: {

                    }
                },
                selected: {
                    boxShadow: "2px 7px 5px 3px #444444",
                    top: "-10px",
                },
                div: {
                    css: {
                        display: "block",
                        height: "6vw",
                        opacity: 0.8
                    },
                },
            }, title: {
                css: {
                },
                div: {
                    css: {
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "5vh",
                        textAlign: "center" as const,

                    },
                }
            }
        },
        studentDetail: {
            container: {
                css: {
                    position: "relative",
                    height: "75vh",
                    minHeight: "60vh",
                    display: "inline-flex"
                },
                grid: {
                    xs: 12
                },
            },
            contentContainer: {
                css: {
                    width:"100%",
                    padding: "2% 0 5% 50%",
                    position: "relative" as const
                },
                comingSoon: {
                    css: {
                        margin: "auto",
                        fontSize: "6vw",
                        textAlign: "left" as const,
                        paddingTop: "30%",
                        textShadow: "5px 5px 2px #ffdef1",
                    }
                },
                name: {
                    container: {
                        css: {
                            width: "100%",
                            margin: "auto",
                            display: "inline-flex"
                        }
                    },
                    jpName: {
                        css: {
                            textAlign: "left" as const,
                            margin: "0",
                            fontSize: "3.5vw",
                            marginBottom: 0,
                            paddingRight: "2vw"
                        }
                    },
                    enName: {
                        css: {
                            textAlign: "left" as const,
                            marginTop: "auto",
                            fontSize: "2.3vw",
                            marginBottom: 0
                        }
                    }
                },
                description: {
                    css : {
                        width: "80%",
                        wordBreak: "break-all" as const,
                        fontSize: "1vw"
                    }
                },
                personalInfo: {
                    css : {

                    },
                    grid: {

                    },
                    info : {
                        css: {
                            margin: "0 0 0 0",
                            fontSize: "1em",
                            width:"70%"
                        },
                        spacing: 1,

                        grid: {
                            titleSx : 3,
                            contentSx : 9,
                        }
                    }
                }
            },imageContainer: {
                css: {
                    width:"40%",
                    position: "absolute" as const,
                    top: "5vh",
                    left: "10%",
                    overflow: "hidden",
                    borderRadius: "50%",
                    zIndex: 1
                },
                comingSoon: {
                    width:"30%",
                    position: "absolute" as const,
                    top: "5vh",
                    left: "10%",
                    overflow: "hidden",
                    borderRadius: "50%",
                    zIndex: 1,
                    padding: "5%"
                },
            },
            image: {
                css: {
                    maxHeight:"50%",
                    maxWidth:"100%",
                },
                comingSoon: {
                    maxHeight:"60%",
                    maxWidth:"100%",
                    borderRadius: "50%",
                    textAlign: "right" as const
                }
            },
        },
        button: {
            next: {
                css: {
                    position: "absolute" as const,
                    right: "0px",
                    top: "50%",
                    fontSize: "5em",
                    zIndex: 100,
                    color: "black"
                }
            },
            previous: {
                css: {
                    position: "absolute" as const,
                    left: "0px",
                    top: "50%",
                    fontSize: "5em",
                    zIndex: 100,
                    color: "black"
                },
            }
        }
    };

    const mobileStyle = {
        isMobile : true,
        container : {
            css : {
                height: "auto",
                margin:0,
                backgroundImage : "url("+MobileBackground+")",
                backgroundPosition: "top",
                backgroundRepeat: "noRepeat",
                backgroundSize: "cover",
                fontFamily: "FuturaHandwritten",
                position: "relative",
                paddingTop: "5vh",
                zIndex: -2
            },
            grid: {
                spacing: 2
            }
        },
        title: {
            css: {
                height: "auto",
                minHeight: "4vh",
                color: "black",
                textAlign: "center",
                fontSize: "5vw",
                fontFamily: "BaksoSapi"
            },
            grid: {
                xs: 12
            }
        },
        studentImages: {
            div: {
                css: {
                    marginLeft: "5vw",
                    marginRight: "5vw",
                    display: "inline-flex",
                    width: "100%",
                    height: "15vh",
                }
            },
            css: {
                // height: "15vh",
                minHeight: "5vh",
                margin: "auto",
                position: "relative" as const
            },
            grid: {
                xs: 2
            },
            image: {
                css: {
                    position: "relative" as const,
                    borderRadius: "50%",
                    height: "8vw",
                    maxHeight: "50px",
                    top: "10%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                },
                questionMarkCss: {
                    position: "relative" as const,
                    borderRadius: "50%",
                    height: "8vw",
                    maxHeight: "50px",
                    maxWidth: "50px",
                    width: "8vw",
                    top: "10%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    verticalAlign: "middle",
                    fontFamily: "BaksoSapi",
                    color: "#CBCAFE",
                    textAlign: "center",
                    fontSize: "6vw"

                },
                backgroundColor: {
                    odd: {
                        backgroundColor: "#ffdef1",
                    },
                    even: {
                        backgroundColor: "#fff8b8",
                    },
                    hover: {
                        backgroundColor: "#ffffff",
                    }
                },
                president: {
                    css: {
                        top: "10%",
                        height: "10vw",
                    },questionMarkCss: {
                        top: "10%",
                        height: "10vw",
                        width: "10vw",
                        fontSize: "8vw"
                    },
                },
                questionMark: {
                    css: {

                    }
                },
                selected: {
                    boxShadow: "2px 7px 5px 3px #444444",
                    top: "-10px",
                },
                div: {
                    css: {
                        display: "block",
                        height: "100%",
                        width: "100%",
                        opacity: 0.8
                    },
                },
            }, title: {
                css: {
                },
                div: {
                    css: {
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "5vh",
                        textAlign: "center" as const,

                    },
                }
            }
        },
        studentDetail: {
            container: {
                css: {
                    position: "relative",
                    height: "85vh",
                    minHeight: "60vh",
                    display: "block"
                },
                grid: {
                    xs: 12
                },
            },
            contentContainer: {
                css: {
                    width:"100%",
                    // padding: "2% 0 5% 50%",
                    // position: "relative" as const
                    display: "block"
                },
                comingSoon: {
                    css: {
                        margin: "auto",
                        fontSize: "10vw",
                        textAlign: "center" as const,
                        width: "100%",
                        textShadow: "5px 5px 2px #ffdef1",
                        paddingTop: "5vh"
                    }
                },
                name: {
                    container: {
                        css: {
                            width: "100%",
                            margin: "auto",
                            textAlign: "center" as const,
                            display: "inline-flex"
                        }
                    },
                    jpName: {
                        css: {
                            width: "50%",
                            textAlign: "right" as const,
                            margin: "0",
                            fontSize: "7vw",
                            marginBottom: 0,
                            paddingRight: "2vw"
                        }
                    },
                    enName: {
                        css: {
                            width: "50%",
                            textAlign: "left" as const,
                            marginTop: "auto",
                            fontSize: "5vw",
                            marginBottom: 0
                        }
                    }
                },
                description: {
                    css : {
                        width: "90%",
                        wordBreak: "break-all" as const,
                        padding: "0 5% 0 5%",
                        fontSize: "3vw"
                    }
                },
                personalInfo: {
                    css : {

                    },
                    grid: {

                    },
                    info : {
                        css: {
                            margin: "0 0 0 15vw",
                            fontSize: "3vw",
                            maxWidth: "85%"
                        },
                        spacing: 1,

                        grid: {
                            titleSx : 4,
                            contentSx : 8,
                        }
                    }
                }
            },imageContainer: {
                css: {
                    width:"80%",
                    // position: "absolute" as const,
                    // top: "vh",
                    // left: "10%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "auto",
                    paddingBottom: "20px",
                    overflow: "hidden",
                    // borderRadius: "50%",
                    zIndex: 1,
                },
                comingSoon: {
                    width:"80%",
                    // position: "absolute" as const,
                    // top: "15vh",
                    overflow: "hidden",
                    borderRadius: "50%",
                    zIndex: 1,
                    margin: "auto",
                    paddingTop: "10vh"
                },
            },
            image: {
                css: {
                    maxHeight:"100%",
                    maxWidth:"100%",
                },
                comingSoon: {
                    maxHeight:"100%",
                    maxWidth:"100%",
                    borderRadius: "50%",
                    textAlign: "center" as const
                }
            },
        },
        button: {
            next: {
                css: {
                    position: "absolute" as const,
                    right: "0px",
                    top: "50%",
                    fontSize: "5em",
                    zIndex: 100,
                    color: "black"
                }
            },
            previous: {
                css: {
                    position: "absolute" as const,
                    left: "0px",
                    top: "50%",
                    fontSize: "5em",
                    zIndex: 100,
                    color: "black"
                },
            }
        }
    }

    const changeLayout = ()=>{
        return window.innerWidth > 900 ? webStyle : mobileStyle;
        // return webStyle;
    }

    const clickOnProfile = (index: any)=>{
        setFade(false);
        let updatedObject: any[] = [];
        studentUnionMember.forEach((member)=>updatedObject.push(member));
        updatedObject[0].isSelected = false;
        updatedObject[index].isSelected = true;
        setStudentUnionMemberState(updatedObject);
        setTimeout(()=>{
            setSelectedMember(updatedObject[index]);
            setFade(true);
            },200);
    }
    const clickOnNextProfile = (index: any)=>{
        if(index < studentUnionMember.length-1){
            clickOnProfile(index+1);
        }else{
            clickOnProfile(0);
        }

    }
    const clickOnPreviousProfile = (index: any)=>{
        if(index <= 0 ){
            clickOnProfile(studentUnionMember.length-1);
        }else{
            clickOnProfile(index-1);
        }
    }

    const imageMouseEnter = (e: any, index: any) => {
        setHover({index: index, isHover: true});
    }
    const imageMouseLeave = (e: any, index: any) => {
        setHover({index: -1, isHover: false})
    }

    const [style, setStyle] = useState(changeLayout());

    window.addEventListener('resize', ()=>{
        setStyle(changeLayout());
    });

    useEffect(() => {

    });


    return (
        <Grid container spacing={style.container.grid.spacing} sx={style.container.css}>
            <Grid item xs={style.title.grid.xs} sx={style.title.css}>
                <h1>Student Union Members</h1>
            </Grid>
            <div style={style.studentImages.div.css}>
                <Grid container spacing={1}>
            {
                    studentUnionMemberState.map((member, index)=>{
                        //Comment isSelected logic
                        // if(member.isSelected) {
                        //     imageDivStyle = {...style.studentImages.image.css,...style.studentImages.image.selected};
                        // }

                        let imageDivStyle = member.profileCompleted? style.studentImages.image.css : style.studentImages.image.questionMarkCss;

                        //Background
                        if(hover.index == index && hover.isHover){
                            imageDivStyle = {...imageDivStyle,...style.studentImages.image.backgroundColor.hover};
                        } else if(index % 2 == 0) {
                            imageDivStyle = {...imageDivStyle,...style.studentImages.image.backgroundColor.even};
                        } else {
                            imageDivStyle = {...imageDivStyle,...style.studentImages.image.backgroundColor.odd};
                        }

                        //President
                        if((index == 4 || index == 5 || index == 6) && !style.isMobile) {
                            const presidentStyle = (member.profileCompleted) ?
                                style.studentImages.image.president.css :
                                style.studentImages.image.president.questionMarkCss;
                            imageDivStyle = {
                                ...imageDivStyle,
                                ...presidentStyle
                            }
                        }

                        let imageStyle = {};
                        //question mark
                        if(index != 5) {
                            imageDivStyle = {...imageDivStyle, ...style.studentImages.image.questionMark.css}
                        }

                        return (
                            <>
                                <Grid
                                    id="images"
                                    item key={index}
                                    xs={style.studentImages.grid.xs}
                                    sx={style.studentImages.css}
                                >
                                    <a href="javascript:void(0);" style={{textDecoration: "none"}}>
                                        <div style={{...style.studentImages.image.div.css, ...imageStyle}}>
                                            {(member.profileCompleted) ?
                                                <img src={member.icon}
                                                     alt={"student-union-" + index} style={imageDivStyle}
                                                     onClick={() => {
                                                         clickOnProfile(index);
                                                     }}
                                                     onMouseEnter={(e) => {
                                                         imageMouseEnter(e, index);
                                                     }}
                                                     onMouseLeave={(e) => {
                                                         imageMouseLeave(e, index);
                                                     }}/>
                                                :
                                                <div style={imageDivStyle}
                                                     onClick={() => {
                                                         clickOnProfile(index);
                                                     }}
                                                     onMouseEnter={(e) => {
                                                         imageMouseEnter(e, index);
                                                     }}
                                                     onMouseLeave={(e) => {
                                                         imageMouseLeave(e, index);
                                                     }}
                                                >?</div>}
                                        </div>
                                    </a>
                                    {(style.isMobile) ?
                                        <span></span>
                                        :
                                        <div style={style.studentImages.title.div.css}>
                                            {hover.isHover && hover.index == member.index ? member.title : ""}
                                        </div>}
                                </Grid>
                                {
                                    (style.isMobile && (member.index==4 || member.index==9)) ? <Grid item xs={0}></Grid> : ""
                                }
                            </>
                        );
                    })
            }
                </Grid>
            </div>
            <Fade appear={false} in={fade} unmountOnExit>
                {(selectedMember.profileCompleted) ?
                    <Grid item xs={style.studentDetail.container.grid.xs} sx={style.studentDetail.container.css}>
                        <div style={style.studentDetail.imageContainer.css}>
                            <img src={selectedMember.image} alt={"student-union"}
                                 style={style.studentDetail.image.css}/>
                            {/*<a href={"javascript:void(0);"}>*/}
                            {/*    <div style={style.button.previous.css}><ChevronLeftIcon fontSize="inherit"*/}
                            {/*                                                            onClick={() => clickOnPreviousProfile(selectedMember.index)}/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                            {/*<a href={"javascript:void(0);"}>*/}
                            {/*    <div style={style.button.next.css}><ChevronRightIcon fontSize="inherit"*/}
                            {/*                                                         onClick={() => clickOnNextProfile(selectedMember.index)}/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                        </div>
                        <div style={style.studentDetail.contentContainer.css}>
                            <div style={style.studentDetail.contentContainer.name.container.css}>
                                <div
                                    style={style.studentDetail.contentContainer.name.jpName.css}>{selectedMember.jpName}</div>
                                <div
                                    style={style.studentDetail.contentContainer.name.enName.css}>{selectedMember.enName}</div>
                            </div>
                            <div style={style.studentDetail.contentContainer.description.css}>
                                <p>
                                    {selectedMember.content}
                                </p>
                            </div>
                            <Grid container spacing={style.studentDetail.contentContainer.personalInfo.info.spacing}
                                  sx={style.studentDetail.contentContainer.personalInfo.info.css}>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.titleSx}>
                                    Title:
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.contentSx}>
                                    {selectedMember.title}
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.titleSx}>
                                    Class:
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.contentSx}>
                                    {selectedMember.class}
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.titleSx}>
                                    Class No:
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.contentSx}>
                                    {selectedMember.classNo}
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.titleSx}>
                                    Birthday:
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.contentSx}>
                                    {selectedMember.birthday}
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.titleSx}>
                                    Hobbies:
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.contentSx}>
                                    {selectedMember.hobbies}
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.titleSx}>
                                    Height:
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.contentSx}>
                                    {selectedMember.height}
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.titleSx}>
                                    Measurements:
                                </Grid>
                                <Grid item xs={style.studentDetail.contentContainer.personalInfo.info.grid.contentSx}>
                                    {selectedMember.measurements}
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    :
                    <Grid item xs={style.studentDetail.container.grid.xs} sx={style.studentDetail.container.css}>
                        <div style={style.studentDetail.imageContainer.comingSoon}>
                            <img src={selectedMember.image} alt={"student-union"}
                                 style={style.studentDetail.image.comingSoon}/>
                            {/*<a href={"javascript:void(0);"}>*/}
                            {/*    <div style={style.button.previous.css}><ChevronLeftIcon fontSize="inherit"*/}
                            {/*                                                            onClick={() => clickOnPreviousProfile(selectedMember.index)}/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                            {/*<a href={"javascript:void(0);"}>*/}
                            {/*    <div style={style.button.next.css}><ChevronRightIcon fontSize="inherit"*/}
                            {/*                                                         onClick={() => clickOnNextProfile(selectedMember.index)}/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                        </div>
                        <div style={style.studentDetail.contentContainer.css}>
                            <div  style={style.studentDetail.contentContainer.comingSoon.css} >Coming Soon!</div>
                        </div>
                    </Grid>
                }
            </Fade>
        </Grid>
    );
}

export default StudentUnion;