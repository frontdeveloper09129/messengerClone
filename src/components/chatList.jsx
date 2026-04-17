
// import here all the css 
import { useState } from 'react'
import './chatlist.css'

export function ChatList() {


    // list poeple 
    // so here i cant update the ui event the list active is chnage becauce im not using state here or my listPoeplt is not a state 
    //  so i change my list into state
    const [listPeople, setListPeople] = useState([
        {
            id: 1,
            name: "Sofia Reyes",
            profile: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
            isActive: true,
            message: []

        },

        {
            id: 2,
            name: "Alysa Mangubat",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDqqqA4sLnBPWpH2sWChXxeMDPM69LexoBQ&s",
            isActive: false,
            message: []

        },

        {
            id: 3,
            name: "Jaron Alob",
            profile: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
            isActive: false,
            message: []

        },
        {
            id: 4,
            name: "Aiah",
            profile: "https://i.pinimg.com/1200x/25/4a/0c/254a0c9762b43015485c7538fac96c93.jpg",
            isActive: true,
            message: []

        },
        {
            id: 5,
            name: "Stacey",
            profile: "https://i.redd.it/bini-stacey-appreciation-post-v0-6241ma2a9eld1.jpg?width=665&format=pjpg&auto=webp&s=eef042556d4e16ae651ccca7093e600c63db4a2a",
            isActive: false,
            message: []


        }, {
            id: 6,
            name: "Colet",
            profile: "https://i0.wp.com/andasian.com/wp-content/uploads/2025/11/bini-colet-fma.jpg?resize=1080%2C1350&ssl=1",
            isActive: false,
            message: []






        }, {
            id: 7,
            name: "Maloi",
            profile: "https://od2-image-api.abs-cbn.com/prod/editorImage/1730719730412Snapinsta.app_464302591_2870120526476313_956047570439638152_n_1080.jpg",
            isActive: false,
            message: []
        }, {
            id: 8,
            name: "Mika",
            profile: "https://images.preview.ph/preview/images/2024/11/12/bini-mikha-1716027130-3370602328280979977-1618763425-1731397325.jpg",
            isActive: true,
            message: []



        },

        {
            id: 9,
            name: "Gwen",
            profile: "https://contents.pep.ph/images2/images2/2024/03/14/gwen-1710384052.jpg",
            isActive: true,
            message: []
        },

        {
            id: 10,
            name: "Sheena",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cxoEZPN4eKkRgrwcgl7Om_kD0ygIFhlabg&s",
            isActive: false,
            message: []
        },

        {
            id: 11,
            name: "Jhoanna",
            profile: "https://i.pinimg.com/originals/17/d5/5b/17d55be466858d585724668c479217a5.jpg",
            isActive: true,
            message: []
        }
    ])
    // state
    const [selectProfile, setSelectProfile] = useState(listPeople[0])
    const [calling, setCalling] = useState(false)
    const [sendText, setSendText] = useState("")



    // handle event
    const handleClickPhone = () => {
        setCalling(!calling)
    }

    const handleVideoCall = () => {
        alert("video")
    }

    const handleMenu = () => {
        alert("menu")
    }
    const handleSelectProfile = (person) => {
        setSelectProfile(person)
        // so now since other person profule is not active i want to be it active when i click their profile
        const updateIsactiveList = listPeople.map((item) => item.id === person.id && item.isActive === false ? { ...item, isActive: true } : item)
        setListPeople(updateIsactiveList)
    }

    const handleSendMesage = (e) => {
        if (sendText.trim() === "") return;
        const updating = () => {
            setListPeople(updatedWithBot);
            const updatedProfile = updatedWithBot.find(item => item.id === selectProfile.id)
            if (updatedProfile) {
                setSelectProfile(updatedProfile)
            }
            setSendText("");
        }

        // Bot response check - must be BEFORE setSendText("")
        if (sendText.toLocaleLowerCase() === "hellow" || sendText.toLocaleLowerCase() === "hi") {
            const updatedWithBot = listPeople.map(item => {
                if (item.id === selectProfile.id) {
                    return {
                        ...item,
                        message: [
                            ...(item.message || []),
                            { sender: "user", text: sendText },
                            { sender: "bot", text: "hellow how can i help you today? " }
                        ]
                    };
                }
                return item;
            });
            setListPeople(updatedWithBot)
            const updateProfile = updatedWithBot.find(item => item.id === selectProfile.id)
            if (updateProfile) {
                setSelectProfile(updateProfile)
            }
            setSendText("")
            // updating()
            return;
        } else if (sendText.toLocaleLowerCase() === "how old are you?") {
            const updatedWithBot = listPeople.map((item) => {
                if (item.id === selectProfile.id) {
                    return {
                        ...item,
                        message: [
                            ...(item.message || []), //“If item.message exists, use it. If not, use an empty array [].”
                            { sender: "user", text: sendText },
                            { sender: "bot", text: "sorry i dont have a answer for that question because i am just a robot that created by human." }
                        ]
                    };
                }
                return item;
            });
            setListPeople(updatedWithBot)
            const updateProfile = updatedWithBot.find(item => item.id === selectProfile.id)
            if (updateProfile) {
                setSelectProfile(updateProfile)
            }
            setSendText("")
            // updating()
            return // stop the code
        } else {
            const updatedWithBot = listPeople.map((item) => {
                if (item.id === selectProfile.id) {
                    return {
                        ...item, message: [
                            ...(item.message || []), //“If item.message exists, use it. If not, use an empty array [].”
                            { sender: "user", text: sendText },
                            { sender: "bot", text: "sorry i dont understand what your saying to me, because i just only know a few words and i have a limit for that." }
                        ]
                    }
                }
                return item
            });
            setListPeople(updatedWithBot);
            const updateProfile = updatedWithBot.find(item => item.id === selectProfile.id)
            if (updateProfile) {
                setSelectProfile(updateProfile)
            }
            setSendText("")
            // updating()

            return
        }
        setSendText("");

        const updated = listPeople.map(item => {
            if (item.id === selectProfile.id) {
                return {
                    ...item,
                    message: [
                        ...(item.message || []),
                        { sender: "user", text: sendText }
                    ]
                };
            }
            return item;
        });


        setListPeople(updated)

        // Update selectProfile to reflect the new message
        const updatedProfile = updated.find(item => item.id === selectProfile.id)
        if (updatedProfile) {
            setSelectProfile(updatedProfile)
        }

    }
    const handleLike = () => {
        const updated = listPeople.map((likesIcon) => likesIcon.id === selectProfile.id ? {
            ...likesIcon, message: [
                ...(likesIcon.message || []), { sender: "user", type: "like" }
            ]

        } : likesIcon)

        setListPeople(updated)

        // Update selectProfile to reflect the new like
        const updatedProfile = updated.find(item => item.id === selectProfile.id)
        if (updatedProfile) {
            setSelectProfile(updatedProfile)
        }
    }
    const [inputClick, setInputClick] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const handleClickInput = () => {
        setInputClick(true)
    }
    const handleClickExit = () => {
        setInputClick(false)
    }
    const handleChangeInput = (e) => {
        setSearchInput(e.target.value)
        // setSearchInput(value)
        // console.log(searchInput)
    }
    const ValueInput = listPeople.filter(person => person.name.toLocaleLowerCase().includes(searchInput.toLowerCase()))// to know in the search input has letter of listPeople name
    return (
        <div className="main-container">
            <div className="chat-list-container">
                <div className="container">
                    {/* header */}
                    <div className="chat-header">
                        <h1>Chat</h1>
                        <div className="icon">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-solid fa-message"></i>
                        </div>
                    </div>

                    {/* search bar */}
                    <div className="search-bar-container" onClick={(handleClickInput)}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" value={searchInput} placeholder="Search Messenger" onChange={handleChangeInput} />
                    </div>

                    <div className="main-list-container">
                        {/* list chat people */}
                        {inputClick === true ? (
                            <div className="searching-input-container">
                                <i className="fa-solid fa-arrow-left" onClick={handleClickExit}></i>
                                {ValueInput.map((person, item) => (
                                    <div key={item} className="container-person-find" onClick={() => handleSelectProfile(person)}>
                                        <div className="c">
                                            <img src={person.profile} alt="" />
                                            <p>{person.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            listPeople.map((person, idx) => (
                                <div key={idx} className="list-people-container" onClick={() => handleSelectProfile(person, idx)}>
                                    <div className="image">
                                        <img src={person.profile} alt="" />
                                        {person.isActive && (
                                            <img className='chat-list-image' src={"https://media.baamboozle.com/uploads/images/599461/1661872333_9457.png"} />
                                        )}
                                    </div> {/*put a profile here*/}

                                    <div className="name">
                                        <h1>{person.name}</h1>
                                        <p>you're now friends with {person.name}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div className="chatting-container">
                <div className="contact-wit-container">
                    <div className="header">
                        {/* so here i just map all the listpeople state and show only which item i selected */}
                        {listPeople.map((item) => (
                            <div key={item.id} className="image-header-active">
                                {selectProfile.id === item.id && item.isActive === true && (
                                    <div className="wrapper">
                                        <div className="active-image-container-select">
                                            <div className="right-chat-header">
                                                <div className="chat-image">
                                                    <img src={item.profile} />
                                                    {item.isActive && (
                                                        <img className='image-active' src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/Green_Dot_%28Active%29.png"} />
                                                    )}
                                                </div>
                                                <div className="chat-name">
                                                    <h1>{item.name}</h1>
                                                    {item.isActive && (
                                                        <p>active now</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="left-chat-header">
                                                <i className="fa-solid fa-arrow-left" title="Back to chat list" onClick={() => setSelectProfile(listPeople[0])}></i>
                                                <i className="fa-solid fa-phone" role='button' onClick={handleClickPhone}></i>
                                                <i className="fa-solid fa-video" onClick={handleVideoCall}></i>
                                                <i className="fa-solid fa-ellipsis" onClick={handleMenu}></i>
                                            </div>
                                        </div>

                                        <div className="messaging-container">
                                            <div className="container-message-list-user">

                                            </div>
                                            <div className="container-message-user">
                                                {selectProfile.message?.map((response, inds) => (
                                                    <div key={inds} className={`chat-container ${response.sender === "user" ? "user" : "bot"}`}>
                                                        {response.type === "like" ? (
                                                            <i className="fa-solid fa-thumbs-up message"></i>
                                                        ) : (
                                                            <p className='message'>{response.text}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="message-bottom-container">
                                                <div className="bottom-input-icon">
                                                    <div className="icon-messaging-container">
                                                        <i className="fa-solid fa-microphone"></i>
                                                        <i className="fa-solid fa-image"></i>
                                                        <i className="fa-solid fa-face-grin"></i>
                                                    </div>
                                                    <div className="input-messaging-container">
                                                        <input type="text" placeholder='Aa' value={sendText} onChange={(e) => setSendText(e.target.value)} onKeyDown={(e) => {
                                                            if (e.key === "Enter") {
                                                                handleSendMesage()
                                                            }
                                                        }} />
                                                        <i className="fa-solid fa-face-grin"></i>
                                                    </div>

                                                    <div className="like-zone-container">
                                                        <i className="fa-solid fa-thumbs-up" onClick={handleLike}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* create a container when calling */}
            <div className={`main-container-calling ${calling === true ? "Show" : ""}`}>
                <div className="container-background">
                    <div className="calling-header">
                        <div className="left-container-calling">
                            <img src={selectProfile.profile} alt="" />
                            <p>{selectProfile.name}</p>
                        </div>

                        <div className="right-container-calling">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>

                    <div className="main-center-profile-calling">
                        <div className="center-containerss">
                            <img src={selectProfile.profile} alt="" />
                            <h1>{selectProfile.name}</h1>
                            <p>calling...</p>
                        </div>
                    </div>

                    <div className="buttom-container-calling">
                        <i className="fa-solid fa-user-plus"></i>
                        <i className="fa-solid fa-video-slash"></i>
                        <i className="fa-solid fa-microphone-slash"></i>
                        <i className="fa-solid fa-phone-flip" onClick={handleClickPhone}></i>
                    </div>
                </div>

            </div>




        </div>

    )
}