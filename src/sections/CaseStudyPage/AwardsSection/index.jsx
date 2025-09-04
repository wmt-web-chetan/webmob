import AwardComponent from '@/components/AwardComponent' 

const AwardSection = (props) => {
  const data = {
    "description": "From innovation to execution, our recognition speaks volumes about the quality, creativity, and results we bring to every project.",
    "title": "Awards That Define Our Journey",
    "awards": [
        {
            "description": null,
            "title": "Top Website Developer 2023",
            "year": null,
            "image": {
                "node": {
                    "mediaItemUrl": "http://192.168.1.60/wp-content/uploads/2025/08/Frame-1321314493-1.png"
                }
            }
        },
        {
            "description": null,
            "title": "Top Web Developer: Real Estate",
            "year": null,
            "image": {
                "node": {
                    "mediaItemUrl": "http://192.168.1.60/wp-content/uploads/2025/08/852b86146a61ab9a4421ff813471570d204263db.jpg"
                }
            }
        },
        {
            "description": null,
            "title": "Top Web Developer: Real Estate",
            "year": null,
            "image": {
                "node": {
                    "mediaItemUrl": "http://192.168.1.60/wp-content/uploads/2025/08/Frame-1321314493-1.png"
                }
            }
        },
        {
            "description": null,
            "title": "Top Web Developer: Real Estate",
            "year": null,
            "image": {
                "node": {
                    "mediaItemUrl": "http://192.168.1.60/wp-content/uploads/2025/08/Frame-1321314493-1.png"
                }
            }
        },
        {
            "description": null,
            "title": "Top Web Developer: Real Estate",
            "year": null,
            "image": {
                "node": {
                    "mediaItemUrl": "http://192.168.1.60/wp-content/uploads/2025/08/93e111e49d6a40ec7214307088882758a02953d7-1-scaled.png"
                }
            }
        },
        {
            "description": null,
            "title": "Top Web Developer: Real Estate",
            "year": null,
            "image": {
                "node": {
                    "mediaItemUrl": "http://192.168.1.60/wp-content/uploads/2025/08/Frame-1321314493-1.png"
                }
            }
        }
    ],
    "mainRating": {
        "platform": "Clutch",
        "reviewCount": "44 reviews on Clutch",
        "value": "4.7",
        "logo": {
            "node": {
                "mediaItemUrl": "http://192.168.1.60/wp-content/uploads/2025/09/ms-azure-2.webp"
            }
        }
    }
}
  return (
    <AwardComponent {...data} />
  )
}

export default AwardSection