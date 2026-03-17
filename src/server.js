import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "swiggy api!",
  });
});
app.get("/restaurants/list", (req, res) => {
  res.json({
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      pageOffset: {
        nextOffset: "CJhlELQ4KICostzSlo/2HjCnEzgB",
        widgetOffset: {
          IplCommonFloatyWidget_JHS: "",
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
          inlineFacetFilter: "",
          restaurantCountWidget: "",
        },
      },
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              header: {
                title: "What's on your mind?",
                headerStyling: {
                  padding: {
                    left: 16,
                    top: 16,
                    bottom: 4,
                  },
                },
              },
              layout: {
                rows: 1,
                columns: 10,
                horizontalScrollEnabled: true,
                itemSpacing: 24,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 8,
                    top: 8,
                    right: 12,
                    bottom: 4,
                  },
                },
                widgetTheme: {
                  defaultMode: {
                    backgroundColour: "#FFFFFF",
                    theme: "THEME_TYPE_LIGHT",
                  },
                  darkMode: {
                    theme: "THEME_TYPE_DARK",
                  },
                },
              },
              imageGridCards: {
                info: [
                  {
                    id: "750639",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/f45b3545-7867-4144-b0c3-1a6ac930aeaa_Kachori.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80448?collection_id=80448&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                      text: "Kachori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for kachori",
                      altTextCta: "open",
                    },
                    entityId: "80448",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750591",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750201",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749876",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                      text: "Chole Bhature",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chhole bhatoore",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750252",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80406?collection_id=80406&tags=layout_CCS_Tea&type=rcv2",
                      text: "Tea",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for tea",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80406&tags=layout_CCS_Tea",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749868",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cake",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750229",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                      text: "Poha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for poha",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750131",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                      text: "Dosa",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for dosa",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750561",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                      text: "Vada",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for vada",
                      altTextCta: "open",
                    },
                    entityId: "80425",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750643",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                      text: "Idli",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for idly",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750234",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                      text: "Poori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for poori",
                      altTextCta: "open",
                    },
                    entityId: "80377",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749790",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80469?collection_id=80469&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                      text: "Pakoda",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pakoda",
                      altTextCta: "open",
                    },
                    entityId: "80469",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750225",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749984",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83659?collection_id=83659&tags=layout_CCS_Coffee&type=rcv2",
                      text: "Coffee",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for coffee",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83659&tags=layout_CCS_Coffee",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750216",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                      text: "Pav Bhaji",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pav bhaji",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749786",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                      text: "Omelette",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for omelette",
                      altTextCta: "open",
                    },
                    entityId: "80467",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749762",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                      text: "Lassi",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for lassi",
                      altTextCta: "open",
                    },
                    entityId: "80458",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "749760",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                      text: "Khichdi",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for khichdi",
                      altTextCta: "open",
                    },
                    entityId: "80455",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750079",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cutlet.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80414?collection_id=80414&tags=layout_BAU_Contextual%2Ccutlet&type=rcv2",
                      text: "Cutlet",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cutlet",
                      altTextCta: "open",
                    },
                    entityId: "80414",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                  {
                    id: "750637",
                    imageId:
                      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                      text: "Juice",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for juice",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
                    frequencyCapping: {},
                    externalMarketing: {},
                    overlayIcon: {},
                    footerOverlay: {
                      title: {},
                      subtitle: {},
                      cta: {},
                    },
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
              id: "whats_on_your_mind",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                  info: [
                    {
                      id: "750639",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/f45b3545-7867-4144-b0c3-1a6ac930aeaa_Kachori.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80448?collection_id=80448&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                        text: "Kachori",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for kachori",
                        altTextCta: "open",
                      },
                      entityId: "80448",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750591",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                        text: "Biryani",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for biryani",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750201",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
                        text: "Paratha",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for paratha",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "749876",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
                        text: "Chole Bhature",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for chhole bhatoore",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750252",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80406?collection_id=80406&tags=layout_CCS_Tea&type=rcv2",
                        text: "Tea",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for tea",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80406&tags=layout_CCS_Tea",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "749868",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                        text: "Cakes",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for cake",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750229",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                        text: "Poha",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for poha",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750131",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                        text: "Dosa",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for dosa",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750561",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                        text: "Vada",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for vada",
                        altTextCta: "open",
                      },
                      entityId: "80425",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750643",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                        text: "Idli",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for idly",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750234",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                        text: "Poori",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for poori",
                        altTextCta: "open",
                      },
                      entityId: "80377",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "749790",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80469?collection_id=80469&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                        text: "Pakoda",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for pakoda",
                        altTextCta: "open",
                      },
                      entityId: "80469",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750225",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                        text: "Salad",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for salad",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "749984",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                      action: {
                        link: "https://www.swiggy.com/collections/83659?collection_id=83659&tags=layout_CCS_Coffee&type=rcv2",
                        text: "Coffee",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for coffee",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=83659&tags=layout_CCS_Coffee",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750216",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                        text: "Pav Bhaji",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for pav bhaji",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "749786",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80467?collection_id=80467&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                        text: "Omelette",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for omelette",
                        altTextCta: "open",
                      },
                      entityId: "80467",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "749762",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                        text: "Lassi",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for lassi",
                        altTextCta: "open",
                      },
                      entityId: "80458",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "749760",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                        text: "Khichdi",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for khichdi",
                        altTextCta: "open",
                      },
                      entityId: "80455",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750079",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cutlet.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80414?collection_id=80414&tags=layout_BAU_Contextual%2Ccutlet&type=rcv2",
                        text: "Cutlet",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurant curated for cutlet",
                        altTextCta: "open",
                      },
                      entityId: "80414",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                    {
                      id: "750637",
                      imageId:
                        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
                      action: {
                        link: "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                        text: "Juice",
                        type: "WEBLINK",
                      },
                      entityType: "BANNER",
                      accessibility: {
                        altText: "restaurants curated for juice",
                        altTextCta: "open",
                      },
                      entityId:
                        "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
                      frequencyCapping: {},
                      externalMarketing: {},
                      overlayIcon: {},
                      footerOverlay: {
                        title: {},
                        subtitle: {},
                        cta: {},
                      },
                    },
                  ],
                  style: {
                    width: {
                      type: "TYPE_RELATIVE",
                      value: 0.2941,
                      reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                    },
                    height: {
                      type: "TYPE_RELATIVE",
                      value: 1.2444,
                      reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                    },
                  },
                },
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              header: {
                title: "Top restaurant chains in Lucknow",
                action: {},
                headerStyling: {
                  padding: {
                    left: 16,
                    top: 28,
                    bottom: 18,
                  },
                },
              },
              layout: {
                rows: 1,
                columns: 20,
                horizontalScrollEnabled: true,
                itemSpacing: 32,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 16,
                    right: 12,
                    bottom: 12,
                  },
                },
                scrollBar: {
                  scrollThumbColor: "#E46D47",
                  scrollTrackColor: "#02060C",
                  width: 54,
                  height: 4,
                  scrollStyling: {
                    padding: {
                      top: 6,
                      bottom: 24,
                    },
                  },
                },
                widgetTheme: {
                  defaultMode: {
                    backgroundColour: "#1B3028",
                    theme: "THEME_TYPE_DARK",
                  },
                  darkMode: {
                    backgroundColour: "#1B3028",
                    theme: "THEME_TYPE_DARK",
                  },
                },
              },
              id: "top_brands_for_you",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                  restaurants: [
                    {
                      info: {
                        id: "789168",
                        name: "Theobroma",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/5/50748fd6-abff-498f-808a-37e858e0537a_789168.JPG",
                        locality: "Hazratganj",
                        areaName: "Hazratganj",
                        costForTwo: "₹400 for two",
                        cuisines: ["Bakery", "Desserts"],
                        avgRating: 4.5,
                        parentId: "1040",
                        avgRatingString: "4.5",
                        totalRatingsString: "1.3K+",
                        sla: {
                          deliveryTime: 23,
                          lastMileTravel: 4.1,
                          serviceability: "SERVICEABLE",
                          slaString: "20-25 mins",
                          lastMileTravelString: "4.1 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 02:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "newg.png",
                              description: "Gourmet",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "50% OFF",
                          discountTag: "FLAT DEAL",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.5",
                            ratingCount: "102",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/theobroma-hazratganj-rest789168",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "59654",
                        name: "Subway",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9034887d-c857-4a9a-b67c-90f4837c1e44_59654.jpg",
                        locality: "Hazratganj",
                        areaName: "Hazratganj",
                        costForTwo: "₹350 for two",
                        cuisines: [
                          "sandwich",
                          "Salads",
                          "wrap",
                          "Healthy Food",
                        ],
                        avgRating: 4.3,
                        parentId: "2",
                        avgRatingString: "4.3",
                        totalRatingsString: "16K+",
                        sla: {
                          deliveryTime: 30,
                          lastMileTravel: 4.3,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "4.3 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 04:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "High%20Protein/rx%20tag%205.png",
                              description: "High Protein",
                            },
                          ],
                        },
                        isOpen: true,
                        aggregatedDiscountInfoV2: {},
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "High Protein",
                                    imageId: "High%20Protein/rx%20tag%205.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.2",
                            ratingCount: "2.2K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/subway-hazratganj-rest59654",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "76869",
                        name: "Radhey Lal Premium Sweets",
                        cloudinaryImageId: "bzupoiynxjbgogvumixa",
                        locality: "Chowk",
                        areaName: "Chowk",
                        costForTwo: "₹200 for two",
                        cuisines: [
                          "Sweets",
                          "Chinese",
                          "Desserts",
                          "North Indian",
                        ],
                        avgRating: 4.6,
                        veg: true,
                        parentId: "164351",
                        avgRatingString: "4.6",
                        totalRatingsString: "69K+",
                        sla: {
                          deliveryTime: 33,
                          lastMileTravel: 5,
                          serviceability: "SERVICEABLE",
                          slaString: "30-35 mins",
                          lastMileTravelString: "5.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 00:15:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "Rxawards/_CATEGORY-Mithai.png",
                              description: "Delivery!",
                            },
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹69",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "2.7K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/radhey-lal-premium-sweets-chowk-rest76869",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "461532",
                        name: "Starbucks Coffee",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/6/7e577503-2bd9-4879-9a2c-f08c72e1c6c1_461532.JPG",
                        locality: "Hazratganj",
                        areaName: "Hazratganj",
                        costForTwo: "₹400 for two",
                        cuisines: [
                          "Beverages",
                          "Cafe",
                          "Snacks",
                          "Desserts",
                          "Bakery",
                          "Ice Cream",
                        ],
                        avgRating: 4.5,
                        parentId: "195515",
                        avgRatingString: "4.5",
                        totalRatingsString: "1.7K+",
                        sla: {
                          deliveryTime: 31,
                          lastMileTravel: 4.2,
                          serviceability: "SERVICEABLE",
                          slaString: "30-35 mins",
                          lastMileTravelString: "4.2 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:59:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId:
                                "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                              description: "Delivery!",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId:
                                      "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "₹85 OFF",
                          subHeader: "ABOVE ₹199",
                          discountTag: "FLAT DEAL",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.4",
                            ratingCount: "974",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/starbucks-coffee-hazratganj-rest461532",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "231204",
                        name: "Burger King",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/be8eea17-e424-4af2-9ab7-d45d5d71a66a_231204.jpg",
                        locality: "Hazratganj",
                        areaName: "Hazratganj",
                        costForTwo: "₹350 for two",
                        cuisines: ["Burgers", "American"],
                        avgRating: 4.4,
                        parentId: "166",
                        avgRatingString: "4.4",
                        totalRatingsString: "29K+",
                        sla: {
                          deliveryTime: 32,
                          lastMileTravel: 4.5,
                          serviceability: "SERVICEABLE",
                          slaString: "30-40 mins",
                          lastMileTravelString: "4.5 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 05:00:00",
                          opened: true,
                        },
                        badges: {},
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹59",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.4",
                            ratingCount: "6.4K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/burger-king-hazratganj-rest231204",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "532693",
                        name: "McDonald's",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/2f068dfd-4cfd-4833-8c6d-a20f5cf709ff_532693.JPG",
                        locality: "Habibullah Estate Road",
                        areaName: "Hazratganj",
                        costForTwo: "₹400 for two",
                        cuisines: ["American", "Fast Food", "Beverages"],
                        avgRating: 4.4,
                        parentId: "630",
                        avgRatingString: "4.4",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 26,
                          lastMileTravel: 3.7,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "3.7 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 03:45:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "Rxawards/_CATEGORY-Burger.png",
                              description: "Delivery!",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Burger.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹49",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/mcdonalds-habibullah-estate-road-hazratganj-rest532693",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "70646",
                        name: "Chhappan Bhog",
                        cloudinaryImageId: "bn39lysdyyxl8hkeripl",
                        locality: "Sadar Bazaar",
                        areaName: "Sadar Bazaar",
                        costForTwo: "₹200 for two",
                        cuisines: [
                          "Sweets",
                          "Snacks",
                          "Fast Food",
                          "Beverages",
                          "dessert",
                          "Ice Cream",
                        ],
                        avgRating: 4.7,
                        veg: true,
                        parentId: "60152",
                        avgRatingString: "4.7",
                        totalRatingsString: "54K+",
                        sla: {
                          deliveryTime: 27,
                          lastMileTravel: 3,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "3.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 22:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "Rxawards/_CATEGORY-Mithai.png",
                              description: "Delivery!",
                            },
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹29",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.2",
                            ratingCount: "11K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/chhappan-bhog-sadar-bazaar-rest70646",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "66671",
                        name: "Mr. Brown - Danbro",
                        cloudinaryImageId: "2c469b5d88f84b7495b9825d06e4bb9b",
                        locality: "Hazratganj",
                        areaName: "Hazratganj",
                        costForTwo: "₹350 for two",
                        cuisines: [
                          "Bakery",
                          "Italian",
                          "Continental",
                          "Pizzas",
                          "Burgers",
                          "Beverages",
                          "Cakes & Pastries",
                          "Desserts",
                        ],
                        avgRating: 4.6,
                        veg: true,
                        parentId: "561622",
                        avgRatingString: "4.6",
                        totalRatingsString: "23K+",
                        sla: {
                          deliveryTime: 32,
                          lastMileTravel: 4.2,
                          serviceability: "SERVICEABLE",
                          slaString: "30-40 mins",
                          lastMileTravelString: "4.2 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 02:59:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "Rxawards/_CATEGORY-Desserts.png",
                              description: "Delivery!",
                            },
                            {
                              imageId: "newg.png",
                              description: "Gourmet",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹35",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.3",
                            ratingCount: "4.0K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/mr-brown-danbro-hazratganj-rest66671",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "229730",
                        name: "LunchBox - Meals and Thalis",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/5b1bf908-b004-4aad-9b04-b615b7aedcde_229730.jpg",
                        locality: "Habibulla Estate Road",
                        areaName: "Hazratganj",
                        costForTwo: "₹200 for two",
                        cuisines: ["Thalis", "North Indian", "Biryani"],
                        avgRating: 4.3,
                        parentId: "4925",
                        avgRatingString: "4.3",
                        totalRatingsString: "4.8K+",
                        sla: {
                          deliveryTime: 35,
                          lastMileTravel: 4.2,
                          serviceability: "SERVICEABLE",
                          slaString: "30-40 mins",
                          lastMileTravelString: "4.2 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:59:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "High%20Protein/rx%20tag%205.png",
                              description: "High Protein",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "High Protein",
                                    imageId: "High%20Protein/rx%20tag%205.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹99",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/lunchbox-meals-and-thalis-habibulla-estate-road-hazratganj-rest229730",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "635227",
                        name: "Bakingo",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/07b00a8c-ac88-4237-8a8e-de30221b8104_635227.JPG",
                        locality: "Gokhle Marg",
                        areaName: "Hazratganj",
                        costForTwo: "₹299 for two",
                        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
                        avgRating: 4.7,
                        parentId: "3818",
                        avgRatingString: "4.7",
                        totalRatingsString: "10K+",
                        sla: {
                          deliveryTime: 31,
                          lastMileTravel: 5.6,
                          serviceability: "SERVICEABLE",
                          slaString: "30-35 mins",
                          lastMileTravelString: "5.6 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 01:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "Rxawards/_CATEGORY-Desserts.png",
                              description: "Delivery!",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "₹175 OFF",
                          subHeader: "ABOVE ₹849",
                          discountTag: "FLAT DEAL",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/bakingo-gokhle-marg-hazratganj-rest635227",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "65082",
                        name: "Classic Radhey Sweets",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/2/6be321db-cd9b-4606-b012-182d29280168_65082.jpg",
                        locality: "Mahanagar",
                        areaName: "Mahanagar",
                        costForTwo: "₹300 for two",
                        cuisines: ["Sweets", "Thalis", "Snacks"],
                        avgRating: 4.5,
                        veg: true,
                        parentId: "63739",
                        avgRatingString: "4.5",
                        totalRatingsString: "34K+",
                        sla: {
                          deliveryTime: 40,
                          lastMileTravel: 7.8,
                          serviceability: "SERVICEABLE",
                          slaString: "35-45 mins",
                          lastMileTravelString: "7.8 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:30:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "50% OFF",
                          subHeader: "UPTO ₹100",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "1.5K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/classic-radhey-sweets-mahanagar-rest65082",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "63183",
                        name: "Raj Luxmi Ashiyana",
                        cloudinaryImageId: "odkkpotn8qsctjmkvf9p",
                        locality: "Ashiyana",
                        areaName: "Ashiyana",
                        costForTwo: "₹250 for two",
                        cuisines: [
                          "North Indian",
                          "Thalis",
                          "South Indian",
                          "Pizzas",
                          "Beverages",
                        ],
                        avgRating: 4.4,
                        veg: true,
                        parentId: "471548",
                        avgRatingString: "4.4",
                        totalRatingsString: "50K+",
                        sla: {
                          deliveryTime: 40,
                          lastMileTravel: 7.3,
                          serviceability: "SERVICEABLE",
                          slaString: "35-45 mins",
                          lastMileTravelString: "7.3 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 00:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "60% OFF",
                          subHeader: "UPTO ₹120",
                          headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
                          secondaryDiscountCallout: "₹30 Cashback",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "5.3K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/raj-luxmi-ashiyana-ashiyana-rest63183",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "165050",
                        name: "Mahalaxmi Sweets & Restaurant",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/2/df433bc1-40a5-4ec6-9cea-a50ffdd9a048_165050.jpg",
                        locality: "Aliganj",
                        areaName: "Aliganj",
                        costForTwo: "₹300 for two",
                        cuisines: [
                          "North Indian",
                          "Thalis",
                          "South Indian",
                          "Snacks",
                          "Chinese",
                          "Sweets",
                          "Desserts",
                          "Beverages",
                          "Ice Cream",
                        ],
                        avgRating: 4.5,
                        veg: true,
                        parentId: "262175",
                        avgRatingString: "4.5",
                        totalRatingsString: "41K+",
                        sla: {
                          deliveryTime: 40,
                          lastMileTravel: 10.6,
                          serviceability: "SERVICEABLE",
                          slaString: "40-45 mins",
                          lastMileTravelString: "10.6 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "₹125 OFF",
                          subHeader: "ABOVE ₹249",
                          discountTag: "FLAT DEAL",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "8.6K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/mahalaxmi-sweets-and-restaurant-aliganj-rest165050",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "216642",
                        name: "Wow! Momo",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/4f69155c-2e6c-4529-98d9-78ca367952c7_216642.JPG",
                        locality: "Husainganj",
                        areaName: "Husainganj",
                        costForTwo: "₹200 for two",
                        cuisines: [
                          "Momos",
                          "Chinese",
                          "fastfood",
                          "Asian",
                          "Beverages",
                        ],
                        avgRating: 4.4,
                        parentId: "1776",
                        avgRatingString: "4.4",
                        totalRatingsString: "2.9K+",
                        sla: {
                          deliveryTime: 26,
                          lastMileTravel: 1.7,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "1.7 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 03:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "android/static-assets/icons/big_rx.png",
                              description: "bolt!",
                            },
                            {
                              imageId: "Rxawards/_CATEGORY-Chinese.png",
                              description: "Delivery!",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "bolt!",
                                    imageId:
                                      "android/static-assets/icons/big_rx.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Chinese.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹59",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.4",
                            ratingCount: "398",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/wow-momo-husainganj-rest216642",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "568343",
                        name: "La Pino'z Pizza",
                        cloudinaryImageId: "xabqkb24rjrv8m1jrjpw",
                        locality: "ALAMBAGH",
                        areaName: "SHALIMAR GATEWAY MALL",
                        costForTwo: "₹350 for two",
                        cuisines: [
                          "Pizzas",
                          "Pastas",
                          "Italian",
                          "Desserts",
                          "Beverages",
                        ],
                        avgRating: 4.1,
                        parentId: "4961",
                        avgRatingString: "4.1",
                        totalRatingsString: "3.6K+",
                        sla: {
                          deliveryTime: 36,
                          lastMileTravel: 2.6,
                          serviceability: "SERVICEABLE",
                          slaString: "35-45 mins",
                          lastMileTravelString: "2.6 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 01:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "android/static-assets/icons/big_rx.png",
                              description: "bolt!",
                            },
                            {
                              imageId: "Rxawards/_CATEGORY-Pizza.png",
                              description: "Delivery!",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "bolt!",
                                    imageId:
                                      "android/static-assets/icons/big_rx.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "70% OFF",
                          subHeader: "UPTO ₹140",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/la-pinoz-pizza-alambagh-shalimar-gateway-mall-rest568343",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "133782",
                        name: "Cafe Coffee Day",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/f52a4a62-08a4-423e-a3d7-1120f4581eea_133782.JPG",
                        locality: "MG Marg",
                        areaName: "Hazratganj",
                        costForTwo: "₹400 for two",
                        cuisines: [
                          "Beverages",
                          "Cafe",
                          "Snacks",
                          "Desserts",
                          "Burgers",
                          "Ice Cream",
                          "Bakery",
                          "Fast Food",
                        ],
                        avgRating: 4.5,
                        parentId: "1",
                        avgRatingString: "4.5",
                        totalRatingsString: "1.4K+",
                        sla: {
                          deliveryTime: 32,
                          lastMileTravel: 4.2,
                          serviceability: "SERVICEABLE",
                          slaString: "30-35 mins",
                          lastMileTravelString: "4.2 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 01:00:00",
                          opened: true,
                        },
                        badges: {},
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "60% OFF",
                          subHeader: "UPTO ₹120",
                          headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
                          secondaryDiscountCallout: "₹30 Cashback",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "1.6K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/cafe-coffee-day-mg-marg-hazratganj-rest133782",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "229727",
                        name: "Sweet Truth - Cake and Desserts",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/a48348f3-820a-49b0-b5e4-658d115700e6_229727.JPG",
                        locality: "Habibulla Estate Road",
                        areaName: "Hazratganj",
                        costForTwo: "₹450 for two",
                        cuisines: [
                          "Desserts",
                          "Ice Cream",
                          "Bakery",
                          "Beverages",
                        ],
                        avgRating: 4.4,
                        parentId: "4444",
                        avgRatingString: "4.4",
                        totalRatingsString: "2.2K+",
                        sla: {
                          deliveryTime: 28,
                          lastMileTravel: 4.2,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "4.2 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:59:00",
                          opened: true,
                        },
                        badges: {},
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹79",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/sweet-truth-cake-and-desserts-habibulla-estate-road-hazratganj-rest229727",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "703223",
                        name: "Kwality Walls Ice Cream and More",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a510db8e-ef0a-48ca-b06d-5a39fe2943df_703223.JPG",
                        locality: "Geetapalli Ward",
                        areaName: "Ashiyana",
                        costForTwo: "₹200 for two",
                        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
                        avgRating: 4.8,
                        veg: true,
                        parentId: "582",
                        avgRatingString: "4.8",
                        totalRatingsString: "366",
                        sla: {
                          deliveryTime: 27,
                          lastMileTravel: 2,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "2.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 21:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "android/static-assets/icons/big_rx.png",
                              description: "bolt!",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "bolt!",
                                    imageId:
                                      "android/static-assets/icons/big_rx.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "₹100 OFF",
                          subHeader: "ABOVE ₹899",
                          discountTag: "FLAT DEAL",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/kwality-walls-ice-cream-and-more-geetapalli-ward-ashiyana-rest703223",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "138854",
                        name: "Madhurima Veg",
                        cloudinaryImageId: "gzflgrln6f3dcylcdxji",
                        locality: "Ashiyana",
                        areaName: "Ashiyana",
                        costForTwo: "₹200 for two",
                        cuisines: [
                          "Indian",
                          "South Indian",
                          "Chinese",
                          "Snacks",
                          "Thalis",
                          "Continental",
                        ],
                        avgRating: 4.5,
                        veg: true,
                        parentId: "7799",
                        avgRatingString: "4.5",
                        totalRatingsString: "24K+",
                        sla: {
                          deliveryTime: 51,
                          lastMileTravel: 11,
                          serviceability: "SERVICEABLE",
                          slaString: "50-60 mins",
                          lastMileTravelString: "11.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "Rxawards/_CATEGORY-Chinese.png",
                              description: "Delivery!",
                            },
                            {
                              imageId: "Rxawards/_CATEGORY-Thali.png",
                              description: "Delivery!",
                            },
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Chinese.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Thali.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "₹125 OFF",
                          subHeader: "ABOVE ₹349",
                          discountTag: "FLAT DEAL",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "2.7K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/madhurima-veg-ashiyana-rest138854",
                        type: "WEBLINK",
                      },
                    },
                    {
                      info: {
                        id: "84849",
                        name: "Neelkanth Sweets",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/2/10cab0b7-046d-4c8a-ab20-faeb11ab4ed8_84849.jpg",
                        locality: "Vivek Khand 3",
                        areaName: "Gomti Nagar",
                        costForTwo: "₹300 for two",
                        cuisines: [
                          "Sweets",
                          "Snacks",
                          "Chinese",
                          "South Indian",
                          "Chaat",
                        ],
                        avgRating: 4.6,
                        veg: true,
                        parentId: "7166",
                        avgRatingString: "4.6",
                        totalRatingsString: "55K+",
                        sla: {
                          deliveryTime: 39,
                          lastMileTravel: 10.9,
                          serviceability: "SERVICEABLE",
                          slaString: "35-45 mins",
                          lastMileTravelString: "10.9 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "₹100 OFF",
                          subHeader: "ABOVE ₹199",
                          discountTag: "FLAT DEAL",
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/neelkanth-sweets-vivek-khand-3-gomti-nagar-rest84849",
                        type: "WEBLINK",
                      },
                    },
                  ],
                  theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                  widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                  style: {
                    width: {
                      type: "TYPE_RELATIVE",
                      value: 0.41111112,
                      reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                    },
                    height: {
                      type: "TYPE_RELATIVE",
                      value: 0.7027027,
                      reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                    },
                    layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                  },
                  collectionId: "84124",
                },
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
              title: "Restaurants with online food delivery in Lucknow",
              id: "popular_restaurants_title",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
              sortConfigs: [
                {
                  key: "relevance",
                  title: "Relevance (Default)",
                  selected: true,
                  defaultSelection: true,
                },
                {
                  key: "deliveryTimeAsc",
                  title: "Delivery Time",
                },
                {
                  key: "modelBasedRatingDesc",
                  title: "Rating",
                },
                {
                  key: "costForTwoAsc",
                  title: "Cost: Low to High",
                },
                {
                  key: "costForTwoDesc",
                  title: "Cost: High to Low",
                },
              ],
              restaurantCount: 1973,
              widgetId: "inlineFacetFilter",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              layout: {
                columns: 4,
              },
              id: "restaurant_grid_listing_v2",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
                  restaurants: [
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "568758",
                        name: "Shri Durga Khasta Corner",
                        cloudinaryImageId: "mhelhj0vhnv6cvmrplpb",
                        locality: "Latouche Road",
                        areaName: "Aminabad",
                        costForTwo: "₹300 for two",
                        cuisines: ["Lucknowi", "Snacks", "Fast Food"],
                        avgRating: 4.7,
                        veg: true,
                        parentId: "471261",
                        avgRatingString: "4.7",
                        totalRatingsString: "2.3K+",
                        sla: {
                          deliveryTime: 26,
                          lastMileTravel: 2,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "2.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 16:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "android/static-assets/icons/big_rx.png",
                              description: "bolt!",
                            },
                            {
                              imageId:
                                "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                              description: "OnlyOnSwiggy",
                            },
                          ],
                        },
                        isOpen: true,
                        aggregatedDiscountInfoV2: {},
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "bolt!",
                                    imageId:
                                      "android/static-assets/icons/big_rx.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "OnlyOnSwiggy",
                                    imageId:
                                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/shri-durga-khasta-corner-latouche-road-aminabad-rest568758",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "66872",
                        name: "Netram",
                        cloudinaryImageId: "ad35a5347b01d534bf507be1d8aa4030",
                        locality: "Aminabad",
                        areaName: "Aminabad",
                        costForTwo: "₹200 for two",
                        cuisines: ["Sweets", "Snacks"],
                        avgRating: 4.7,
                        veg: true,
                        parentId: "145638",
                        avgRatingString: "4.7",
                        totalRatingsString: "29K+",
                        sla: {
                          deliveryTime: 25,
                          lastMileTravel: 2.4,
                          serviceability: "SERVICEABLE",
                          slaString: "20-25 mins",
                          lastMileTravelString: "2.4 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "android/static-assets/icons/big_rx.png",
                              description: "bolt!",
                            },
                            {
                              imageId:
                                "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                              description: "OnlyOnSwiggy",
                            },
                          ],
                        },
                        isOpen: true,
                        aggregatedDiscountInfoV2: {},
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "bolt!",
                                    imageId:
                                      "android/static-assets/icons/big_rx.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "OnlyOnSwiggy",
                                    imageId:
                                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.2",
                            ratingCount: "2.4K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/netram-aminabad-rest66872",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "789168",
                        name: "Theobroma",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/5/50748fd6-abff-498f-808a-37e858e0537a_789168.JPG",
                        locality: "Hazratganj",
                        areaName: "Hazratganj",
                        costForTwo: "₹400 for two",
                        cuisines: ["Bakery", "Desserts"],
                        avgRating: 4.5,
                        parentId: "1040",
                        avgRatingString: "4.5",
                        totalRatingsString: "1.3K+",
                        sla: {
                          deliveryTime: 23,
                          lastMileTravel: 4.1,
                          serviceability: "SERVICEABLE",
                          slaString: "20-25 mins",
                          lastMileTravelString: "4.1 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 02:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "newg.png",
                              description: "Gourmet",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "50% OFF",
                          discountTag: "FLAT DEAL",
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.5",
                            ratingCount: "102",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/theobroma-hazratganj-rest789168",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "59654",
                        name: "Subway",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9034887d-c857-4a9a-b67c-90f4837c1e44_59654.jpg",
                        locality: "Hazratganj",
                        areaName: "Hazratganj",
                        costForTwo: "₹350 for two",
                        cuisines: [
                          "sandwich",
                          "Salads",
                          "wrap",
                          "Healthy Food",
                        ],
                        avgRating: 4.3,
                        parentId: "2",
                        avgRatingString: "4.3",
                        totalRatingsString: "16K+",
                        sla: {
                          deliveryTime: 30,
                          lastMileTravel: 4.3,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "4.3 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 04:00:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "High%20Protein/rx%20tag%205.png",
                              description: "High Protein",
                            },
                          ],
                        },
                        isOpen: true,
                        aggregatedDiscountInfoV2: {},
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "High Protein",
                                    imageId: "High%20Protein/rx%20tag%205.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.2",
                            ratingCount: "2.2K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/subway-hazratganj-rest59654",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "1087814",
                        name: "LTR South Indian Tiffin Room",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/e67c7eba-6283-410f-a520-66fd0b0d711f_1087814 (1).jpg",
                        locality: "NOVELTY CINEMA COMPOUND",
                        areaName: "Nagar Nigam",
                        costForTwo: "₹200 for two",
                        cuisines: ["North Indian"],
                        avgRating: 4.6,
                        veg: true,
                        parentId: "669526",
                        avgRatingString: "4.6",
                        totalRatingsString: "491",
                        sla: {
                          deliveryTime: 28,
                          lastMileTravel: 3,
                          serviceability: "SERVICEABLE",
                          slaString: "25-30 mins",
                          lastMileTravelString: "3.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:00:00",
                          opened: true,
                        },
                        badges: {},
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "₹125 OFF",
                          subHeader: "ABOVE ₹249",
                          discountTag: "FLAT DEAL",
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "--",
                          },
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/ltr-south-indian-tiffin-room-novelty-cinema-compound-nagar-nigam-rest1087814",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "76869",
                        name: "Radhey Lal Premium Sweets",
                        cloudinaryImageId: "bzupoiynxjbgogvumixa",
                        locality: "Chowk",
                        areaName: "Chowk",
                        costForTwo: "₹200 for two",
                        cuisines: [
                          "Sweets",
                          "Chinese",
                          "Desserts",
                          "North Indian",
                        ],
                        avgRating: 4.6,
                        veg: true,
                        parentId: "164351",
                        avgRatingString: "4.6",
                        totalRatingsString: "69K+",
                        sla: {
                          deliveryTime: 33,
                          lastMileTravel: 5,
                          serviceability: "SERVICEABLE",
                          slaString: "30-35 mins",
                          lastMileTravelString: "5.0 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-10 00:15:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "Rxawards/_CATEGORY-Mithai.png",
                              description: "Delivery!",
                            },
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "Delivery!",
                                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                                  },
                                },
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "ITEMS",
                          subHeader: "AT ₹69",
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "2.7K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/radhey-lal-premium-sweets-chowk-rest76869",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "384189",
                        name: "Subhash The Mithai Shop",
                        cloudinaryImageId: "e3f5062393c2fa79e4f02cd784544569",
                        locality: "Ashiyana",
                        areaName: "Ashiyana",
                        costForTwo: "₹300 for two",
                        cuisines: [
                          "Sweets",
                          "Desserts",
                          "Fast Food",
                          "Street Food",
                          "Beverages",
                        ],
                        avgRating: 4.6,
                        veg: true,
                        parentId: "256321",
                        avgRatingString: "4.6",
                        totalRatingsString: "3.3K+",
                        sla: {
                          deliveryTime: 35,
                          lastMileTravel: 7.3,
                          serviceability: "SERVICEABLE",
                          slaString: "35-40 mins",
                          lastMileTravelString: "7.3 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:59:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId:
                                "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                              description: "OnlyOnSwiggy",
                            },
                          ],
                        },
                        isOpen: true,
                        aggregatedDiscountInfoV2: {},
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "OnlyOnSwiggy",
                                    imageId:
                                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.2",
                            ratingCount: "2.2K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/subhash-the-mithai-shop-ashiyana-rest384189",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                    {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      info: {
                        id: "65082",
                        name: "Classic Radhey Sweets",
                        cloudinaryImageId:
                          "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/2/6be321db-cd9b-4606-b012-182d29280168_65082.jpg",
                        locality: "Mahanagar",
                        areaName: "Mahanagar",
                        costForTwo: "₹300 for two",
                        cuisines: ["Sweets", "Thalis", "Snacks"],
                        avgRating: 4.5,
                        veg: true,
                        parentId: "63739",
                        avgRatingString: "4.5",
                        totalRatingsString: "34K+",
                        sla: {
                          deliveryTime: 40,
                          lastMileTravel: 7.8,
                          serviceability: "SERVICEABLE",
                          slaString: "35-45 mins",
                          lastMileTravelString: "7.8 km",
                          iconType: "ICON_TYPE_EMPTY",
                        },
                        availability: {
                          nextCloseTime: "2026-03-09 23:30:00",
                          opened: true,
                        },
                        badges: {
                          imageBadges: [
                            {
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                              description: "pureveg",
                            },
                          ],
                        },
                        isOpen: true,
                        type: "F",
                        badgesV2: {
                          entityBadges: {
                            imageBased: {
                              badgeObject: [
                                {
                                  attributes: {
                                    description: "pureveg",
                                    imageId:
                                      "v1695133679/badges/Pure_Veg111.png",
                                  },
                                },
                              ],
                            },
                            textBased: {},
                            textExtendedBadges: {},
                          },
                        },
                        aggregatedDiscountInfoV3: {
                          header: "50% OFF",
                          subHeader: "UPTO ₹100",
                        },
                        orderabilityCommunication: {
                          title: {},
                          subTitle: {},
                          message: {},
                          customIcon: {},
                        },
                        differentiatedUi: {
                          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {},
                          },
                        },
                        reviewsSummary: {},
                        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        restaurantOfferPresentationInfo: {},
                        externalRatings: {
                          aggregatedRating: {
                            rating: "4.1",
                            ratingCount: "1.5K+",
                          },
                          source: "GOOGLE",
                          sourceIconImageId:
                            "v1704440323/google_ratings/rating_google_tag",
                        },
                        ratingsDisplayPreference:
                          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      },
                      analytics: {
                        context:
                          "seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4",
                      },
                      cta: {
                        link: "https://www.swiggy.com/city/lucknow/classic-radhey-sweets-mahanagar-rest65082",
                        text: "RESTAURANT_MENU",
                        type: "WEBLINK",
                      },
                      widgetId:
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                    },
                  ],
                  theme: "SeoRestaurantListingGridWidget",
                },
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
              message: "Show More",
              id: "show_more_button",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
              title: "Best Places to Eat Across Cities",
              brands: [
                {
                  text: "Best Restaurants in Bangalore",
                  link: "https://www.swiggy.com/city/bangalore/best-restaurants",
                },
                {
                  text: "Best Restaurants in Pune",
                  link: "https://www.swiggy.com/city/pune/best-restaurants",
                },
                {
                  text: "Best Restaurants in Mumbai",
                  link: "https://www.swiggy.com/city/mumbai/best-restaurants",
                },
                {
                  text: "Best Restaurants in Delhi",
                  link: "https://www.swiggy.com/city/delhi/best-restaurants",
                },
                {
                  text: "Best Restaurants in Hyderabad",
                  link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
                },
                {
                  text: "Best Restaurants in Kolkata",
                  link: "https://www.swiggy.com/city/kolkata/best-restaurants",
                },
                {
                  text: "Best Restaurants in Chennai",
                  link: "https://www.swiggy.com/city/chennai/best-restaurants",
                },
                {
                  text: "Best Restaurants in Chandigarh",
                  link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
                },
                {
                  text: "Best Restaurants in Ahmedabad",
                  link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
                },
                {
                  text: "Best Restaurants in Jaipur",
                  link: "https://www.swiggy.com/city/jaipur/best-restaurants",
                },
                {
                  text: "Best Restaurants in Nagpur",
                  link: "https://www.swiggy.com/city/nagpur/best-restaurants",
                },
                {
                  text: "Best Restaurants in Bhubaneswar",
                  link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
                },
                {
                  text: "Best Restaurants in Kochi",
                  link: "https://www.swiggy.com/city/kochi/best-restaurants",
                },
                {
                  text: "Best Restaurants in Surat",
                  link: "https://www.swiggy.com/city/surat/best-restaurants",
                },
                {
                  text: "Best Restaurants in Dehradun",
                  link: "https://www.swiggy.com/city/dehradun/best-restaurants",
                },
                {
                  text: "Best Restaurants in Ludhiana",
                  link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
                },
                {
                  text: "Best Restaurants in Patna",
                  link: "https://www.swiggy.com/city/patna/best-restaurants",
                },
                {
                  text: "Best Restaurants in Mangaluru",
                  link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
                },
                {
                  text: "Best Restaurants in Bhopal",
                  link: "https://www.swiggy.com/city/bhopal/best-restaurants",
                },
                {
                  text: "Best Restaurants in Gurgaon",
                  link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
                },
                {
                  text: "Best Restaurants in Coimbatore",
                  link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
                },
                {
                  text: "Best Restaurants in Agra",
                  link: "https://www.swiggy.com/city/agra/best-restaurants",
                },
                {
                  text: "Best Restaurants in Noida",
                  link: "https://www.swiggy.com/city/noida/best-restaurants",
                },
                {
                  text: "Best Restaurants in Vijayawada",
                  link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
                },
                {
                  text: "Best Restaurants in Guwahati",
                  link: "https://www.swiggy.com/city/guwahati/best-restaurants",
                },
                {
                  text: "Best Restaurants in Mysore",
                  link: "https://www.swiggy.com/city/mysore/best-restaurants",
                },
                {
                  text: "Best Restaurants in Pondicherry",
                  link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
                },
                {
                  text: "Best Restaurants in Thiruvananthapuram",
                  link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
                },
                {
                  text: "Best Restaurants in Ranchi",
                  link: "https://www.swiggy.com/city/ranchi/best-restaurants",
                },
                {
                  text: "Best Restaurants in Vizag",
                  link: "https://www.swiggy.com/city/vizag/best-restaurants",
                },
                {
                  text: "Best Restaurants in Udaipur",
                  link: "https://www.swiggy.com/city/udaipur/best-restaurants",
                },
                {
                  text: "Best Restaurants in Vadodara",
                  link: "https://www.swiggy.com/city/vadodara/best-restaurants",
                },
              ],
              id: "restaurant_near_me_links",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
              title: "Best Cuisines Near Me",
              brands: [
                {
                  text: "Chinese Restaurant Near Me",
                  link: "https://www.swiggy.com/chinese-restaurants-near-me",
                },
                {
                  text: "South Indian Restaurant Near Me",
                  link: "https://www.swiggy.com/south-indian-restaurants-near-me",
                },
                {
                  text: "Indian Restaurant Near Me",
                  link: "https://www.swiggy.com/indian-restaurants-near-me",
                },
                {
                  text: "Kerala Restaurant Near Me",
                  link: "https://www.swiggy.com/kerala-restaurants-near-me",
                },
                {
                  text: "Korean Restaurant Near Me",
                  link: "https://www.swiggy.com/korean-restaurants-near-me",
                },
                {
                  text: "North Indian Restaurant Near Me",
                  link: "https://www.swiggy.com/north-indian-restaurants-near-me",
                },
                {
                  text: "Seafood Restaurant Near Me",
                  link: "https://www.swiggy.com/seafood-restaurants-near-me",
                },
                {
                  text: "Bengali Restaurant Near Me",
                  link: "https://www.swiggy.com/bengali-restaurants-near-me",
                },
                {
                  text: "Punjabi Restaurant Near Me",
                  link: "https://www.swiggy.com/punjabi-restaurants-near-me",
                },
                {
                  text: "Italian Restaurant Near Me",
                  link: "https://www.swiggy.com/italian-restaurants-near-me",
                },
                {
                  text: "Andhra Restaurant Near Me",
                  link: "https://www.swiggy.com/andhra-restaurants-near-me",
                },
                {
                  text: "Biryani Restaurant Near Me",
                  link: "https://www.swiggy.com/biryani-restaurants-near-me",
                },
                {
                  text: "Japanese Restaurant Near Me",
                  link: "https://www.swiggy.com/japanese-restaurants-near-me",
                },
                {
                  text: "Arabian Restaurant Near Me",
                  link: "https://www.swiggy.com/arabian-restaurants-near-me",
                },
                {
                  text: "Fast Food Restaurant Near Me",
                  link: "https://www.swiggy.com/fast-food-restaurants-near-me",
                },
                {
                  text: "Jain Restaurant Near Me",
                  link: "https://www.swiggy.com/jain-restaurants-near-me",
                },
                {
                  text: "Gujarati Restaurant Near Me",
                  link: "https://www.swiggy.com/gujarati-restaurants-near-me",
                },
                {
                  text: "Thai Restaurant Near Me",
                  link: "https://www.swiggy.com/thai-restaurants-near-me",
                },
                {
                  text: "Pizzas Restaurant Near Me",
                  link: "https://www.swiggy.com/pizzas-restaurants-near-me",
                },
                {
                  text: "Asian Restaurant Near Me",
                  link: "https://www.swiggy.com/asian-restaurants-near-me",
                },
                {
                  text: "Cafe Restaurant Near Me",
                  link: "https://www.swiggy.com/cafe-restaurants-near-me",
                },
                {
                  text: "Continental Restaurant Near Me",
                  link: "https://www.swiggy.com/continental-restaurants-near-me",
                },
                {
                  text: "Mexican Restaurant Near Me",
                  link: "https://www.swiggy.com/mexican-restaurants-near-me",
                },
                {
                  text: "Mughlai Restaurant Near Me",
                  link: "https://www.swiggy.com/mughlai-restaurants-near-me",
                },
                {
                  text: "Sushi Restaurant Near Me",
                  link: "https://www.swiggy.com/sushi-restaurants-near-me",
                },
                {
                  text: "Mangalorean Restaurant Near Me",
                  link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
                },
                {
                  text: "Tibetan Restaurant Near Me",
                  link: "https://www.swiggy.com/tibetan-restaurants-near-me",
                },
                {
                  text: "Barbecue Restaurant Near Me",
                  link: "https://www.swiggy.com/barbecue-restaurants-near-me",
                },
                {
                  text: "Maharashtrian Restaurant Near Me",
                  link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
                },
                {
                  text: "Nepalese Restaurant Near Me",
                  link: "https://www.swiggy.com/nepalese-restaurants-near-me",
                },
                {
                  text: "Rajasthani Restaurant Near Me",
                  link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
                },
                {
                  text: "Turkish Restaurant Near Me",
                  link: "https://www.swiggy.com/turkish-restaurants-near-me",
                },
              ],
              id: "restaurant_near_me_links",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
              title: "Explore Every Restaurants Near Me",
              brands: [
                {
                  text: "Explore Restaurants Near Me",
                  link: "https://www.swiggy.com/restaurants-near-me",
                },
                {
                  text: "Explore Top Rated Restaurants Near Me",
                  link: "https://www.swiggy.com/best-restaurants-near-me",
                },
              ],
              id: "restaurant_near_me_links",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
              title: "For better experience,download the Swiggy app now",
              androidAppImage: "portal/m/play_store.png",
              androidAppLink:
                "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
              iosAppImage: "portal/m/app_store.png",
              iosAppLink:
                "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
              id: "app_install_links",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
              cities: [
                {
                  text: "Bangalore",
                  link: "https://www.swiggy.com/city/bangalore",
                },
                {
                  text: "Gurgaon",
                  link: "https://www.swiggy.com/city/gurgaon",
                },
                {
                  text: "Hyderabad",
                  link: "https://www.swiggy.com/city/hyderabad",
                },
                {
                  text: "Delhi",
                  link: "https://www.swiggy.com/city/delhi",
                },
                {
                  text: "Mumbai",
                  link: "https://www.swiggy.com/city/mumbai",
                },
                {
                  text: "Pune",
                  link: "https://www.swiggy.com/city/pune",
                },
                {
                  text: "Kolkata",
                  link: "https://www.swiggy.com/city/kolkata",
                },
                {
                  text: "Chennai",
                  link: "https://www.swiggy.com/city/chennai",
                },
                {
                  text: "Ahmedabad",
                  link: "https://www.swiggy.com/city/ahmedabad",
                },
                {
                  text: "Chandigarh",
                  link: "https://www.swiggy.com/city/chandigarh",
                },
                {
                  text: "Jaipur",
                  link: "https://www.swiggy.com/city/jaipur",
                },
                {
                  text: "Kochi",
                  link: "https://www.swiggy.com/city/kochi",
                },
                {
                  text: "Coimbatore",
                  link: "https://www.swiggy.com/city/coimbatore",
                },
                {
                  text: "Lucknow",
                  link: "https://www.swiggy.com/city/lucknow",
                },
                {
                  text: "Nagpur",
                  link: "https://www.swiggy.com/city/nagpur",
                },
                {
                  text: "Vadodara",
                  link: "https://www.swiggy.com/city/vadodara",
                },
                {
                  text: "Indore",
                  link: "https://www.swiggy.com/city/indore",
                },
                {
                  text: "Guwahati",
                  link: "https://www.swiggy.com/city/guwahati",
                },
                {
                  text: "Vizag",
                  link: "https://www.swiggy.com/city/vizag",
                },
                {
                  text: "Surat",
                  link: "https://www.swiggy.com/city/surat",
                },
                {
                  text: "Dehradun",
                  link: "https://www.swiggy.com/city/dehradun",
                },
                {
                  text: "Noida",
                  link: "https://www.swiggy.com/city/noida",
                },
                {
                  text: "Ludhiana",
                  link: "https://www.swiggy.com/city/ludhiana",
                },
                {
                  text: "Trichy",
                  link: "https://www.swiggy.com/city/trichy",
                },
                {
                  text: "Vijayawada",
                  link: "https://www.swiggy.com/city/vijayawada",
                },
                {
                  text: "Kanpur",
                  link: "https://www.swiggy.com/city/kanpur",
                },
                {
                  text: "Mysore",
                  link: "https://www.swiggy.com/city/mysore",
                },
                {
                  text: "Nashik",
                  link: "https://www.swiggy.com/city/nashik",
                },
                {
                  text: "Udaipur",
                  link: "https://www.swiggy.com/city/udaipur",
                },
                {
                  text: "Pondicherry",
                  link: "https://www.swiggy.com/city/pondicherry",
                },
                {
                  text: "Agra",
                  link: "https://www.swiggy.com/city/agra",
                },
                {
                  text: "Aurangabad",
                  link: "https://www.swiggy.com/city/aurangabad",
                },
                {
                  text: "Jalandhar",
                  link: "https://www.swiggy.com/city/jalandhar",
                },
                {
                  text: "Kota",
                  link: "https://www.swiggy.com/city/kota",
                },
                {
                  text: "Madurai",
                  link: "https://www.swiggy.com/city/madurai",
                },
                {
                  text: "Allahabad",
                  link: "https://www.swiggy.com/city/allahabad",
                },
                {
                  text: "Manipal",
                  link: "https://www.swiggy.com/city/manipal",
                },
                {
                  text: "Amritsar",
                  link: "https://www.swiggy.com/city/amritsar",
                },
                {
                  text: "Bareilly",
                  link: "https://www.swiggy.com/city/bareilly",
                },
                {
                  text: "Meerut",
                  link: "https://www.swiggy.com/city/meerut",
                },
                {
                  text: "Bhopal",
                  link: "https://www.swiggy.com/city/bhopal",
                },
                {
                  text: "Ooty",
                  link: "https://www.swiggy.com/city/ooty",
                },
                {
                  text: "Bhubaneswar",
                  link: "https://www.swiggy.com/city/bhubaneswar",
                },
                {
                  text: "Raipur",
                  link: "https://www.swiggy.com/city/raipur",
                },
                {
                  text: "Bikaner",
                  link: "https://www.swiggy.com/city/bikaner",
                },
                {
                  text: "Rajkot",
                  link: "https://www.swiggy.com/city/rajkot",
                },
                {
                  text: "Kozhikode",
                  link: "https://www.swiggy.com/city/kozhikode",
                },
                {
                  text: "Central Goa",
                  link: "https://www.swiggy.com/city/central-goa",
                },
                {
                  text: "Sirsa",
                  link: "https://www.swiggy.com/city/sirsa",
                },
                {
                  text: "Gwalior",
                  link: "https://www.swiggy.com/city/gwalior",
                },
                {
                  text: "Thrissur",
                  link: "https://www.swiggy.com/city/thrissur",
                },
                {
                  text: "Kharagpur",
                  link: "https://www.swiggy.com/city/kharagpur",
                },
                {
                  text: "Tirupati",
                  link: "https://www.swiggy.com/city/tirupati",
                },
                {
                  text: "Tirupur",
                  link: "https://www.swiggy.com/city/tirupur",
                },
                {
                  text: "Vellore",
                  link: "https://www.swiggy.com/city/vellore",
                },
                {
                  text: "Thiruvananthapuram",
                  link: "https://www.swiggy.com/city/thiruvananthapuram",
                },
                {
                  text: "Warangal",
                  link: "https://www.swiggy.com/city/warangal",
                },
                {
                  text: "Varanasi",
                  link: "https://www.swiggy.com/city/varanasi",
                },
                {
                  text: "Mangaluru",
                  link: "https://www.swiggy.com/city/mangaluru",
                },
                {
                  text: "Patna",
                  link: "https://www.swiggy.com/city/patna",
                },
                {
                  text: "Ranchi",
                  link: "https://www.swiggy.com/city/ranchi",
                },
                {
                  text: "Faridabad",
                  link: "https://www.swiggy.com/city/faridabad",
                },
                {
                  text: "Guntur",
                  link: "https://www.swiggy.com/city/guntur",
                },
                {
                  text: "Ujjain",
                  link: "https://www.swiggy.com/city/ujjain",
                },
                {
                  text: "Patiala",
                  link: "https://www.swiggy.com/city/patiala",
                },
                {
                  text: "Karnal",
                  link: "https://www.swiggy.com/city/karnal",
                },
                {
                  text: "Kakinada",
                  link: "https://www.swiggy.com/city/kakinada",
                },
                {
                  text: "Rajahmundry",
                  link: "https://www.swiggy.com/city/rajahmundry",
                },
                {
                  text: "Bilaspur",
                  link: "https://www.swiggy.com/city/bilaspur",
                },
                {
                  text: "Bhilai",
                  link: "https://www.swiggy.com/city/bhilai",
                },
                {
                  text: "Anand",
                  link: "https://www.swiggy.com/city/anand",
                },
                {
                  text: "Bhavnagar",
                  link: "https://www.swiggy.com/city/bhavnagar",
                },
                {
                  text: "Jammu",
                  link: "https://www.swiggy.com/city/jammu",
                },
                {
                  text: "Muktsar",
                  link: "https://www.swiggy.com/city/muktsar",
                },
                {
                  text: "Panipat",
                  link: "https://www.swiggy.com/city/panipat",
                },
                {
                  text: "Jamshedpur",
                  link: "https://www.swiggy.com/city/jamshedpur",
                },
                {
                  text: "Dhanbad",
                  link: "https://www.swiggy.com/city/dhanbad",
                },
                {
                  text: "Bokaro",
                  link: "https://www.swiggy.com/city/bokaro",
                },
                {
                  text: "Hubli",
                  link: "https://www.swiggy.com/city/hubli",
                },
                {
                  text: "Belgaum",
                  link: "https://www.swiggy.com/city/belgaum",
                },
                {
                  text: "Jabalpur",
                  link: "https://www.swiggy.com/city/jabalpur",
                },
                {
                  text: "Kolhapur",
                  link: "https://www.swiggy.com/city/kolhapur",
                },
                {
                  text: "Solapur",
                  link: "https://www.swiggy.com/city/solapur",
                },
                {
                  text: "Shillong",
                  link: "https://www.swiggy.com/city/shillong",
                },
                {
                  text: "Cuttack",
                  link: "https://www.swiggy.com/city/cuttack",
                },
                {
                  text: "Aligarh",
                  link: "https://www.swiggy.com/city/aligarh",
                },
                {
                  text: "Salem",
                  link: "https://www.swiggy.com/city/salem",
                },
                {
                  text: "Agartala",
                  link: "https://www.swiggy.com/city/agartala",
                },
                {
                  text: "Jodhpur",
                  link: "https://www.swiggy.com/city/jodhpur",
                },
                {
                  text: "Ajmer",
                  link: "https://www.swiggy.com/city/ajmer",
                },
                {
                  text: "Jhansi",
                  link: "https://www.swiggy.com/city/jhansi",
                },
                {
                  text: "Gorakhpur",
                  link: "https://www.swiggy.com/city/gorakhpur",
                },
                {
                  text: "Thanjavur",
                  link: "https://www.swiggy.com/city/thanjavur",
                },
                {
                  text: "Erode",
                  link: "https://www.swiggy.com/city/erode",
                },
                {
                  text: "Nellore",
                  link: "https://www.swiggy.com/city/nellore",
                },
                {
                  text: "Rourkela",
                  link: "https://www.swiggy.com/city/rourkela",
                },
                {
                  text: "Anantapur",
                  link: "https://www.swiggy.com/city/anantapur",
                },
                {
                  text: "Kurnool",
                  link: "https://www.swiggy.com/city/kurnool",
                },
                {
                  text: "Ahmednagar",
                  link: "https://www.swiggy.com/city/ahmednagar",
                },
                {
                  text: "Phagwara",
                  link: "https://www.swiggy.com/city/phagwara",
                },
                {
                  text: "Ambala",
                  link: "https://www.swiggy.com/city/ambala",
                },
                {
                  text: "Ballari",
                  link: "https://www.swiggy.com/city/ballari",
                },
                {
                  text: "Saharanpur",
                  link: "https://www.swiggy.com/city/saharanpur",
                },
                {
                  text: "Tirunelveli",
                  link: "https://www.swiggy.com/city/tirunelveli",
                },
                {
                  text: "Bathinda",
                  link: "https://www.swiggy.com/city/bathinda",
                },
                {
                  text: "Mathura",
                  link: "https://www.swiggy.com/city/mathura",
                },
                {
                  text: "Haridwar",
                  link: "https://www.swiggy.com/city/haridwar",
                },
                {
                  text: "Ratnagiri",
                  link: "https://www.swiggy.com/city/ratnagiri",
                },
                {
                  text: "Sangli",
                  link: "https://www.swiggy.com/city/sangli",
                },
                {
                  text: "Amravati",
                  link: "https://www.swiggy.com/city/amravati",
                },
                {
                  text: "Rishikesh",
                  link: "https://www.swiggy.com/city/rishikesh",
                },
                {
                  text: "Nagercoil",
                  link: "https://www.swiggy.com/city/nagercoil",
                },
                {
                  text: "KanyaKumari",
                  link: "https://www.swiggy.com/city/kanyakumari",
                },
                {
                  text: "Kadapa",
                  link: "https://www.swiggy.com/city/kadapa",
                },
                {
                  text: "Nizamabad",
                  link: "https://www.swiggy.com/city/nizamabad",
                },
                {
                  text: "Shivamogga",
                  link: "https://www.swiggy.com/city/shivamogga",
                },
                {
                  text: "Davanagere",
                  link: "https://www.swiggy.com/city/davanagere",
                },
                {
                  text: "Roorkee",
                  link: "https://www.swiggy.com/city/roorkee",
                },
                {
                  text: "Nanded",
                  link: "https://www.swiggy.com/city/nanded",
                },
                {
                  text: "Rewa",
                  link: "https://www.swiggy.com/city/rewa",
                },
                {
                  text: "Satna",
                  link: "https://www.swiggy.com/city/satna",
                },
                {
                  text: "Shimla",
                  link: "https://www.swiggy.com/city/shimla",
                },
                {
                  text: "Muzaffarpur",
                  link: "https://www.swiggy.com/city/muzaffarpur",
                },
                {
                  text: "Valsad",
                  link: "https://www.swiggy.com/city/valsad",
                },
                {
                  text: "Vapi",
                  link: "https://www.swiggy.com/city/vapi",
                },
                {
                  text: "Chhapra",
                  link: "https://www.swiggy.com/city/chhapra",
                },
                {
                  text: "Dharamshala",
                  link: "https://www.swiggy.com/city/dharamshala",
                },
                {
                  text: "Kollam",
                  link: "https://www.swiggy.com/city/kollam",
                },
                {
                  text: "Silchar",
                  link: "https://www.swiggy.com/city/silchar",
                },
                {
                  text: "Alappuzha",
                  link: "https://www.swiggy.com/city/alappuzha",
                },
                {
                  text: "Sonipat",
                  link: "https://www.swiggy.com/city/sonipat",
                },
                {
                  text: "Rohtak",
                  link: "https://www.swiggy.com/city/rohtak",
                },
                {
                  text: "Mehsana",
                  link: "https://www.swiggy.com/city/mehsana",
                },
                {
                  text: "Kullu",
                  link: "https://www.swiggy.com/city/kullu",
                },
                {
                  text: "Dhule",
                  link: "https://www.swiggy.com/city/dhule",
                },
                {
                  text: "Dharwad",
                  link: "https://www.swiggy.com/city/dharwad",
                },
                {
                  text: "Latur",
                  link: "https://www.swiggy.com/city/latur",
                },
                {
                  text: "Vizianagaram",
                  link: "https://www.swiggy.com/city/vizianagaram",
                },
                {
                  text: "Khammam",
                  link: "https://www.swiggy.com/city/khammam",
                },
                {
                  text: "Hampi",
                  link: "https://www.swiggy.com/city/hampi",
                },
                {
                  text: "Nainital",
                  link: "https://www.swiggy.com/city/nainital",
                },
                {
                  text: "Akola",
                  link: "https://www.swiggy.com/city/akola",
                },
                {
                  text: "Kalaburagi",
                  link: "https://www.swiggy.com/city/kalaburagi",
                },
                {
                  text: "Gaya",
                  link: "https://www.swiggy.com/city/gaya",
                },
                {
                  text: "Muzaffarnagar",
                  link: "https://www.swiggy.com/city/muzaffarnagar",
                },
                {
                  text: "Dewas",
                  link: "https://www.swiggy.com/city/dewas",
                },
                {
                  text: "Korba",
                  link: "https://www.swiggy.com/city/korba",
                },
                {
                  text: "Mussoorie",
                  link: "https://www.swiggy.com/city/mussoorie",
                },
                {
                  text: "Jalgaon",
                  link: "https://www.swiggy.com/city/jalgaon",
                },
                {
                  text: "Yamuna Nagar",
                  link: "https://www.swiggy.com/city/yamuna-nagar",
                },
                {
                  text: "Bhagalpur",
                  link: "https://www.swiggy.com/city/bhagalpur",
                },
                {
                  text: "Hapur",
                  link: "https://www.swiggy.com/city/hapur",
                },
                {
                  text: "Morena",
                  link: "https://www.swiggy.com/city/morena",
                },
                {
                  text: "Hassan",
                  link: "https://www.swiggy.com/city/hassan",
                },
                {
                  text: "Hisar",
                  link: "https://www.swiggy.com/city/hisar",
                },
                {
                  text: "Godhra",
                  link: "https://www.swiggy.com/city/godhra",
                },
                {
                  text: "Kolar ",
                  link: "https://www.swiggy.com/city/kolar",
                },
                {
                  text: "Rampur",
                  link: "https://www.swiggy.com/city/rampur",
                },
                {
                  text: "Sitapur",
                  link: "https://www.swiggy.com/city/sitapur",
                },
                {
                  text: "Etawah",
                  link: "https://www.swiggy.com/city/etawah",
                },
                {
                  text: "Porbandar",
                  link: "https://www.swiggy.com/city/porbandar",
                },
                {
                  text: "Nadiad",
                  link: "https://www.swiggy.com/city/nadiad",
                },
                {
                  text: "Sagar",
                  link: "https://www.swiggy.com/city/sagar",
                },
                {
                  text: "Morbi",
                  link: "https://www.swiggy.com/city/morbi",
                },
                {
                  text: "Chhindwara",
                  link: "https://www.swiggy.com/city/chhindwara",
                },
                {
                  text: "Tumakuru",
                  link: "https://www.swiggy.com/city/tumakuru",
                },
                {
                  text: "Singrauli",
                  link: "https://www.swiggy.com/city/singrauli",
                },
                {
                  text: "Thoothukudi",
                  link: "https://www.swiggy.com/city/thoothukudi",
                },
                {
                  text: "Katni",
                  link: "https://www.swiggy.com/city/katni",
                },
                {
                  text: "Khandwa",
                  link: "https://www.swiggy.com/city/khandwa",
                },
                {
                  text: "Eluru",
                  link: "https://www.swiggy.com/city/eluru",
                },
                {
                  text: "Malappuram",
                  link: "https://www.swiggy.com/city/malappuram",
                },
                {
                  text: "Dibrugarh",
                  link: "https://www.swiggy.com/city/dibrugarh",
                },
                {
                  text: "Deoghar",
                  link: "https://www.swiggy.com/city/deoghar",
                },
                {
                  text: "Khanna",
                  link: "https://www.swiggy.com/city/khanna",
                },
                {
                  text: "Bidar",
                  link: "https://www.swiggy.com/city/bidar",
                },
                {
                  text: "Anantnag",
                  link: "https://www.swiggy.com/city/anantnag",
                },
                {
                  text: "Madikeri",
                  link: "https://www.swiggy.com/city/madikeri",
                },
                {
                  text: "Haldwani",
                  link: "https://www.swiggy.com/city/haldwani",
                },
                {
                  text: "Panchkula",
                  link: "https://www.swiggy.com/city/panchkula",
                },
                {
                  text: "Farrukhabad",
                  link: "https://www.swiggy.com/city/farrukhabad",
                },
                {
                  text: "Malegaon",
                  link: "https://www.swiggy.com/city/malegaon",
                },
                {
                  text: "Dindigul",
                  link: "https://www.swiggy.com/city/dindigul",
                },
                {
                  text: "Shahjahanpur",
                  link: "https://www.swiggy.com/city/shahjahanpur",
                },
                {
                  text: "Beed",
                  link: "https://www.swiggy.com/city/beed",
                },
                {
                  text: "Junagadh",
                  link: "https://www.swiggy.com/city/junagadh",
                },
                {
                  text: "Asansol",
                  link: "https://www.swiggy.com/city/asansol",
                },
                {
                  text: "Beawar",
                  link: "https://www.swiggy.com/city/beawar",
                },
                {
                  text: "Kishangarh",
                  link: "https://www.swiggy.com/city/kishangarh",
                },
                {
                  text: "Budhwal",
                  link: "https://www.swiggy.com/city/budhwal",
                },
                {
                  text: "Parbhani",
                  link: "https://www.swiggy.com/city/parbhani",
                },
                {
                  text: "Gondia",
                  link: "https://www.swiggy.com/city/gondia",
                },
                {
                  text: "Ichalkaranji",
                  link: "https://www.swiggy.com/city/ichalkaranji",
                },
                {
                  text: "Jalna",
                  link: "https://www.swiggy.com/city/jalna",
                },
                {
                  text: "Yavatmal",
                  link: "https://www.swiggy.com/city/yavatmal",
                },
                {
                  text: "Shivpuri",
                  link: "https://www.swiggy.com/city/shivpuri",
                },
                {
                  text: "Moga",
                  link: "https://www.swiggy.com/city/moga",
                },
                {
                  text: "Abohar",
                  link: "https://www.swiggy.com/city/abohar",
                },
                {
                  text: "Adoni",
                  link: "https://www.swiggy.com/city/adoni",
                },
                {
                  text: "Madanapalle",
                  link: "https://www.swiggy.com/city/madanapalle",
                },
                {
                  text: "Tiruvannamalai",
                  link: "https://www.swiggy.com/city/tiruvannamalai",
                },
                {
                  text: "Satara",
                  link: "https://www.swiggy.com/city/satara",
                },
                {
                  text: "Ambur",
                  link: "https://www.swiggy.com/city/ambur",
                },
                {
                  text: "Karimnagar",
                  link: "https://www.swiggy.com/city/karimnagar",
                },
                {
                  text: "Ratlam",
                  link: "https://www.swiggy.com/city/ratlam",
                },
                {
                  text: "Moradabad",
                  link: "https://www.swiggy.com/city/moradabad",
                },
                {
                  text: "Machilipatnam",
                  link: "https://www.swiggy.com/city/machilipatnam",
                },
                {
                  text: "Ongole",
                  link: "https://www.swiggy.com/city/ongole",
                },
                {
                  text: "Kottayam",
                  link: "https://www.swiggy.com/city/kottayam",
                },
                {
                  text: "Darbhanga",
                  link: "https://www.swiggy.com/city/darbhanga",
                },
                {
                  text: "Kurukshetra",
                  link: "https://www.swiggy.com/city/kurukshetra",
                },
                {
                  text: "Unnao",
                  link: "https://www.swiggy.com/city/unnao",
                },
                {
                  text: "Bulandshahr",
                  link: "https://www.swiggy.com/city/bulandshahr",
                },
                {
                  text: "Durgapur",
                  link: "https://www.swiggy.com/city/durgapur",
                },
                {
                  text: "Siliguri",
                  link: "https://www.swiggy.com/city/siliguri",
                },
                {
                  text: "Pali",
                  link: "https://www.swiggy.com/city/pali",
                },
                {
                  text: "Tadepalligudem",
                  link: "https://www.swiggy.com/city/tadepalligudem",
                },
                {
                  text: "Ramagundam",
                  link: "https://www.swiggy.com/city/ramagundam",
                },
                {
                  text: "Mahbubnagar",
                  link: "https://www.swiggy.com/city/mahbubnagar",
                },
                {
                  text: "Bhiwani",
                  link: "https://www.swiggy.com/city/bhiwani",
                },
                {
                  text: "Cuddalore",
                  link: "https://www.swiggy.com/city/cuddalore",
                },
                {
                  text: "Kaithal",
                  link: "https://www.swiggy.com/city/kaithal",
                },
                {
                  text: "Jagtial",
                  link: "https://www.swiggy.com/city/jagtial",
                },
                {
                  text: "Palakkad",
                  link: "https://www.swiggy.com/city/palakkad",
                },
                {
                  text: "Guna",
                  link: "https://www.swiggy.com/city/guna",
                },
                {
                  text: "Kumbakonam",
                  link: "https://www.swiggy.com/city/kumbakonam",
                },
                {
                  text: "Maunath Bhanjan",
                  link: "https://www.swiggy.com/city/maunath-bhanjan",
                },
                {
                  text: "Baripada",
                  link: "https://www.swiggy.com/city/baripada",
                },
                {
                  text: "Orai",
                  link: "https://www.swiggy.com/city/orai",
                },
                {
                  text: "Bhadrak",
                  link: "https://www.swiggy.com/city/bhadrak",
                },
                {
                  text: "Batala",
                  link: "https://www.swiggy.com/city/batala",
                },
                {
                  text: "Firozpur",
                  link: "https://www.swiggy.com/city/firozpur",
                },
                {
                  text: "Barnala",
                  link: "https://www.swiggy.com/city/barnala",
                },
                {
                  text: "Raigarh",
                  link: "https://www.swiggy.com/city/raigarh",
                },
                {
                  text: "Nagaon",
                  link: "https://www.swiggy.com/city/nagaon",
                },
                {
                  text: "Mainpuri",
                  link: "https://www.swiggy.com/city/mainpuri",
                },
                {
                  text: "Balurghat",
                  link: "https://www.swiggy.com/city/balurghat",
                },
                {
                  text: "Giridih",
                  link: "https://www.swiggy.com/city/giridih",
                },
                {
                  text: "Ghazipur",
                  link: "https://www.swiggy.com/city/ghazipur",
                },
                {
                  text: "Jagdalpur",
                  link: "https://www.swiggy.com/city/jagdalpur",
                },
                {
                  text: "Vidisha",
                  link: "https://www.swiggy.com/city/vidisha",
                },
                {
                  text: "Dimapur",
                  link: "https://www.swiggy.com/city/dimapur",
                },
                {
                  text: "Shikohabad",
                  link: "https://www.swiggy.com/city/shikohabad",
                },
                {
                  text: "Imphal",
                  link: "https://www.swiggy.com/city/imphal",
                },
                {
                  text: "Lakhimpur",
                  link: "https://www.swiggy.com/city/lakhimpur",
                },
                {
                  text: "Rudrapur",
                  link: "https://www.swiggy.com/city/rudrapur",
                },
                {
                  text: "Ambikapur",
                  link: "https://www.swiggy.com/city/ambikapur",
                },
                {
                  text: "Damoh",
                  link: "https://www.swiggy.com/city/damoh",
                },
                {
                  text: "Rae Bareli",
                  link: "https://www.swiggy.com/city/rae-bareli",
                },
                {
                  text: "Tinsukia",
                  link: "https://www.swiggy.com/city/tinsukia",
                },
                {
                  text: "Rajapalayam",
                  link: "https://www.swiggy.com/city/rajapalayam",
                },
                {
                  text: "Rajnandgaon",
                  link: "https://www.swiggy.com/city/rajnandgaon",
                },
                {
                  text: "Kashipur",
                  link: "https://www.swiggy.com/city/kashipur",
                },
                {
                  text: "Ranibennur",
                  link: "https://www.swiggy.com/city/ranibennur",
                },
                {
                  text: "Burhanpur",
                  link: "https://www.swiggy.com/city/burhanpur",
                },
                {
                  text: "Bhadravati",
                  link: "https://www.swiggy.com/city/bhadravati",
                },
                {
                  text: "Chittoor",
                  link: "https://www.swiggy.com/city/chittoor",
                },
                {
                  text: "Pudukkottai",
                  link: "https://www.swiggy.com/city/pudukkottai",
                },
                {
                  text: "Hardoi",
                  link: "https://www.swiggy.com/city/hardoi",
                },
                {
                  text: "Basti",
                  link: "https://www.swiggy.com/city/basti",
                },
                {
                  text: "Karaikkudi",
                  link: "https://www.swiggy.com/city/karaikkudi",
                },
                {
                  text: "Lalitpur",
                  link: "https://www.swiggy.com/city/lalitpur",
                },
                {
                  text: "Hospet",
                  link: "https://www.swiggy.com/city/hospet",
                },
                {
                  text: "Budaun",
                  link: "https://www.swiggy.com/city/budaun",
                },
                {
                  text: "Neemuch",
                  link: "https://www.swiggy.com/city/neemuch",
                },
                {
                  text: "Pilibhit",
                  link: "https://www.swiggy.com/city/pilibhit",
                },
                {
                  text: "Amroha",
                  link: "https://www.swiggy.com/city/amroha",
                },
                {
                  text: "Barshi",
                  link: "https://www.swiggy.com/city/barshi",
                },
                {
                  text: "Sri Ganganagar",
                  link: "https://www.swiggy.com/city/sri-ganganagar",
                },
                {
                  text: "Wardha",
                  link: "https://www.swiggy.com/city/wardha",
                },
                {
                  text: "Sehore",
                  link: "https://www.swiggy.com/city/sehore",
                },
                {
                  text: "Bhimavaram",
                  link: "https://www.swiggy.com/city/bhimavaram",
                },
                {
                  text: "Hanumangarh",
                  link: "https://www.swiggy.com/city/hanumangarh",
                },
                {
                  text: "Pathankot",
                  link: "https://www.swiggy.com/city/pathankot",
                },
                {
                  text: "Puri",
                  link: "https://www.swiggy.com/city/puri",
                },
                {
                  text: "Fatehpur",
                  link: "https://www.swiggy.com/city/fatehpur",
                },
                {
                  text: "Surendranagar Dudhrej",
                  link: "https://www.swiggy.com/city/surendranagar-dudhrej",
                },
                {
                  text: "Jamnagar",
                  link: "https://www.swiggy.com/city/jamnagar",
                },
                {
                  text: "Bhuj",
                  link: "https://www.swiggy.com/city/bhuj",
                },
                {
                  text: "Gandhidham",
                  link: "https://www.swiggy.com/city/gandhidham",
                },
                {
                  text: "Bharuch",
                  link: "https://www.swiggy.com/city/bharuch",
                },
                {
                  text: "Navsari",
                  link: "https://www.swiggy.com/city/navsari",
                },
                {
                  text: "Amreli",
                  link: "https://www.swiggy.com/city/amreli",
                },
                {
                  text: "Palanpur",
                  link: "https://www.swiggy.com/city/palanpur",
                },
                {
                  text: "Bhilwara",
                  link: "https://www.swiggy.com/city/bhilwara",
                },
                {
                  text: "Suratgarh",
                  link: "https://www.swiggy.com/city/suratgarh",
                },
                {
                  text: "Sikar",
                  link: "https://www.swiggy.com/city/sikar",
                },
                {
                  text: "Churu",
                  link: "https://www.swiggy.com/city/churu",
                },
                {
                  text: "Alwar",
                  link: "https://www.swiggy.com/city/alwar",
                },
                {
                  text: "Bhiwadi",
                  link: "https://www.swiggy.com/city/bhiwadi",
                },
                {
                  text: "Bharatpur",
                  link: "https://www.swiggy.com/city/bharatpur",
                },
                {
                  text: "Mount Abu",
                  link: "https://www.swiggy.com/city/mount-abu",
                },
                {
                  text: "Bundi",
                  link: "https://www.swiggy.com/city/bundi",
                },
                {
                  text: "Sawai Madhopur",
                  link: "https://www.swiggy.com/city/sawai-madhopur",
                },
                {
                  text: "Purulia",
                  link: "https://www.swiggy.com/city/purulia",
                },
                {
                  text: "Bardhaman",
                  link: "https://www.swiggy.com/city/bardhaman",
                },
                {
                  text: "Raniganj",
                  link: "https://www.swiggy.com/city/raniganj",
                },
                {
                  text: "Darjeeling",
                  link: "https://www.swiggy.com/city/darjeeling",
                },
                {
                  text: "Jalpaiguri",
                  link: "https://www.swiggy.com/city/jalpaiguri",
                },
                {
                  text: "Chittorgarh",
                  link: "https://www.swiggy.com/city/chittorgarh",
                },
                {
                  text: "Dholpur",
                  link: "https://www.swiggy.com/city/dholpur",
                },
                {
                  text: "Uluberia",
                  link: "https://www.swiggy.com/city/uluberia",
                },
                {
                  text: "Nabadwip",
                  link: "https://www.swiggy.com/city/nabadwip",
                },
                {
                  text: "Bongaon",
                  link: "https://www.swiggy.com/city/bongaon",
                },
                {
                  text: "Kanchrapara",
                  link: "https://www.swiggy.com/city/kanchrapara",
                },
                {
                  text: "Bankura",
                  link: "https://www.swiggy.com/city/bankura",
                },
                {
                  text: "Habra",
                  link: "https://www.swiggy.com/city/habra",
                },
                {
                  text: "Firozabad",
                  link: "https://www.swiggy.com/city/firozabad",
                },
                {
                  text: "Nalgonda",
                  link: "https://www.swiggy.com/city/nalgonda",
                },
                {
                  text: "Chandrapur",
                  link: "https://www.swiggy.com/city/chandrapur",
                },
                {
                  text: "Bijapur",
                  link: "https://www.swiggy.com/city/bijapur",
                },
                {
                  text: "Bhusawal",
                  link: "https://www.swiggy.com/city/bhusawal",
                },
                {
                  text: "Raichur",
                  link: "https://www.swiggy.com/city/raichur",
                },
                {
                  text: "Bahraich",
                  link: "https://www.swiggy.com/city/bahraich",
                },
                {
                  text: "Azamgarh",
                  link: "https://www.swiggy.com/city/azamgarh",
                },
                {
                  text: "Bahadurgarh",
                  link: "https://www.swiggy.com/city/bahadurgarh",
                },
                {
                  text: "Jind",
                  link: "https://www.swiggy.com/city/jind",
                },
                {
                  text: "Rewari",
                  link: "https://www.swiggy.com/city/rewari",
                },
                {
                  text: "Palwal",
                  link: "https://www.swiggy.com/city/palwal",
                },
                {
                  text: "Hathras",
                  link: "https://www.swiggy.com/city/hathras",
                },
                {
                  text: "Sambalpur",
                  link: "https://www.swiggy.com/city/sambalpur",
                },
                {
                  text: "Banda",
                  link: "https://www.swiggy.com/city/banda",
                },
                {
                  text: "Hoshiarpur",
                  link: "https://www.swiggy.com/city/hoshiarpur",
                },
                {
                  text: "Faridkot",
                  link: "https://www.swiggy.com/city/faridkot",
                },
                {
                  text: "Mandsaur",
                  link: "https://www.swiggy.com/city/mandsaur",
                },
                {
                  text: "Suryapet",
                  link: "https://www.swiggy.com/city/suryapet",
                },
                {
                  text: "Adilabad",
                  link: "https://www.swiggy.com/city/adilabad",
                },
                {
                  text: "Narasaraopet",
                  link: "https://www.swiggy.com/city/narasaraopet",
                },
                {
                  text: "Faizabad",
                  link: "https://www.swiggy.com/city/faizabad",
                },
                {
                  text: "Tadpatri",
                  link: "https://www.swiggy.com/city/tadpatri",
                },
                {
                  text: "Gonda",
                  link: "https://www.swiggy.com/city/gonda",
                },
                {
                  text: "Mughalsarai",
                  link: "https://www.swiggy.com/city/mughalsarai",
                },
                {
                  text: "Medinipur",
                  link: "https://www.swiggy.com/city/medinipur",
                },
                {
                  text: "Nagda",
                  link: "https://www.swiggy.com/city/nagda",
                },
                {
                  text: "Chilakaluripet",
                  link: "https://www.swiggy.com/city/chilakaluripet",
                },
                {
                  text: "Hindupur",
                  link: "https://www.swiggy.com/city/hindupur",
                },
                {
                  text: "Kasganj",
                  link: "https://www.swiggy.com/city/kasganj",
                },
                {
                  text: "Raiganj",
                  link: "https://www.swiggy.com/city/raiganj",
                },
                {
                  text: "Deoria City",
                  link: "https://www.swiggy.com/city/deoria-city",
                },
                {
                  text: "Sultanpur",
                  link: "https://www.swiggy.com/city/sultanpur",
                },
                {
                  text: "Shamli",
                  link: "https://www.swiggy.com/city/shamli",
                },
                {
                  text: "Krishnanagar",
                  link: "https://www.swiggy.com/city/krishnanagar",
                },
                {
                  text: "Ballia",
                  link: "https://www.swiggy.com/city/ballia",
                },
                {
                  text: "Guntakal",
                  link: "https://www.swiggy.com/city/guntakal",
                },
                {
                  text: "Miryalaguda",
                  link: "https://www.swiggy.com/city/miryalaguda",
                },
                {
                  text: "Etah",
                  link: "https://www.swiggy.com/city/etah",
                },
                {
                  text: "Berhampore",
                  link: "https://www.swiggy.com/city/berhampore",
                },
                {
                  text: "Gudivada",
                  link: "https://www.swiggy.com/city/gudivada",
                },
                {
                  text: "Haldia",
                  link: "https://www.swiggy.com/city/haldia",
                },
                {
                  text: "Santipur",
                  link: "https://www.swiggy.com/city/santipur",
                },
                {
                  text: "Basirhat",
                  link: "https://www.swiggy.com/city/basirhat",
                },
                {
                  text: "Seoni",
                  link: "https://www.swiggy.com/city/seoni",
                },
                {
                  text: "Udgir",
                  link: "https://www.swiggy.com/city/udgir",
                },
                {
                  text: "Proddatur",
                  link: "https://www.swiggy.com/city/proddatur",
                },
                {
                  text: "Nagapattinam",
                  link: "https://www.swiggy.com/city/nagapattinam",
                },
                {
                  text: "Chikmagalur",
                  link: "https://www.swiggy.com/city/chikmagalur",
                },
                {
                  text: "Chandausi",
                  link: "https://www.swiggy.com/city/chandausi",
                },
                {
                  text: "Bhind",
                  link: "https://www.swiggy.com/city/bhind",
                },
                {
                  text: "Mandya",
                  link: "https://www.swiggy.com/city/mandya",
                },
                {
                  text: "Bagalkot",
                  link: "https://www.swiggy.com/city/bagalkot",
                },
                {
                  text: "Nandurbar",
                  link: "https://www.swiggy.com/city/nandurbar",
                },
                {
                  text: "Chitradurga",
                  link: "https://www.swiggy.com/city/chitradurga",
                },
                {
                  text: "Osmanabad",
                  link: "https://www.swiggy.com/city/osmanabad",
                },
                {
                  text: "Modinagar",
                  link: "https://www.swiggy.com/city/modinagar",
                },
                {
                  text: "Gadag-Betigeri",
                  link: "https://www.swiggy.com/city/gadag-betigeri",
                },
                {
                  text: "Hoshangabad",
                  link: "https://www.swiggy.com/city/hoshangabad",
                },
                {
                  text: "Jaunpur",
                  link: "https://www.swiggy.com/city/jaunpur",
                },
                {
                  text: "Khurja",
                  link: "https://www.swiggy.com/city/khurja",
                },
                {
                  text: "Port Blair",
                  link: "https://www.swiggy.com/city/port-blair",
                },
                {
                  text: "Jorhat",
                  link: "https://www.swiggy.com/city/jorhat",
                },
                {
                  text: "Nandyal",
                  link: "https://www.swiggy.com/city/nandyal",
                },
                {
                  text: "Biharsharif",
                  link: "https://www.swiggy.com/city/biharsharif",
                },
                {
                  text: "Buxar",
                  link: "https://www.swiggy.com/city/buxar",
                },
                {
                  text: "Siwan",
                  link: "https://www.swiggy.com/city/siwan",
                },
                {
                  text: "Dehri",
                  link: "https://www.swiggy.com/city/dehri",
                },
                {
                  text: "Bettiah",
                  link: "https://www.swiggy.com/city/bettiah",
                },
                {
                  text: "Kishanganj",
                  link: "https://www.swiggy.com/city/kishanganj",
                },
                {
                  text: "Saharsa",
                  link: "https://www.swiggy.com/city/saharsa",
                },
                {
                  text: "Hajipur",
                  link: "https://www.swiggy.com/city/hajipur",
                },
                {
                  text: "Motihari",
                  link: "https://www.swiggy.com/city/motihari",
                },
                {
                  text: "Sasaram",
                  link: "https://www.swiggy.com/city/sasaram",
                },
                {
                  text: "Munger",
                  link: "https://www.swiggy.com/city/munger",
                },
                {
                  text: "Katihar",
                  link: "https://www.swiggy.com/city/katihar",
                },
                {
                  text: "Arrah",
                  link: "https://www.swiggy.com/city/arrah",
                },
                {
                  text: "Srikakulam",
                  link: "https://www.swiggy.com/city/srikakulam",
                },
                {
                  text: "Begusarai",
                  link: "https://www.swiggy.com/city/begusarai",
                },
                {
                  text: "Neyveli",
                  link: "https://www.swiggy.com/city/neyveli",
                },
                {
                  text: "Waidhan",
                  link: "https://www.swiggy.com/city/waidhan",
                },
                {
                  text: "Markapur",
                  link: "https://www.swiggy.com/city/markapur",
                },
                {
                  text: "Chikkaballapur",
                  link: "https://www.swiggy.com/city/chikkaballapur",
                },
                {
                  text: "Bhatkal",
                  link: "https://www.swiggy.com/city/bhatkal",
                },
                {
                  text: "Gokak",
                  link: "https://www.swiggy.com/city/gokak",
                },
                {
                  text: "Itarsi",
                  link: "https://www.swiggy.com/city/itarsi",
                },
                {
                  text: "Dabra",
                  link: "https://www.swiggy.com/city/dabra",
                },
                {
                  text: "Dhar",
                  link: "https://www.swiggy.com/city/dhar",
                },
                {
                  text: "Chalisgaon",
                  link: "https://www.swiggy.com/city/chalisgaon",
                },
                {
                  text: "Thiruvallur",
                  link: "https://www.swiggy.com/city/thiruvallur",
                },
                {
                  text: "Namakkal",
                  link: "https://www.swiggy.com/city/namakkal",
                },
                {
                  text: "Dharmapuri",
                  link: "https://www.swiggy.com/city/dharmapuri",
                },
                {
                  text: "Bhandara",
                  link: "https://www.swiggy.com/city/bhandara",
                },
                {
                  text: "Virudhunagar",
                  link: "https://www.swiggy.com/city/virudhunagar",
                },
                {
                  text: "Siddipet",
                  link: "https://www.swiggy.com/city/siddipet",
                },
                {
                  text: "Gadwal",
                  link: "https://www.swiggy.com/city/gadwal",
                },
                {
                  text: "Bodhan-Rural",
                  link: "https://www.swiggy.com/city/bodhan-rural",
                },
                {
                  text: "Kamareddy",
                  link: "https://www.swiggy.com/city/kamareddy",
                },
                {
                  text: "Jhunjhunu",
                  link: "https://www.swiggy.com/city/jhunjhunu",
                },
                {
                  text: "Kapurthala",
                  link: "https://www.swiggy.com/city/kapurthala",
                },
                {
                  text: "Sangrur",
                  link: "https://www.swiggy.com/city/sangrur",
                },
                {
                  text: "Gurdaspur",
                  link: "https://www.swiggy.com/city/gurdaspur",
                },
                {
                  text: "Ramgarh",
                  link: "https://www.swiggy.com/city/ramgarh",
                },
                {
                  text: "Bantwal",
                  link: "https://www.swiggy.com/city/bantwal",
                },
                {
                  text: "Doddaballapura",
                  link: "https://www.swiggy.com/city/doddaballapura",
                },
                {
                  text: "Buldana",
                  link: "https://www.swiggy.com/city/buldana",
                },
                {
                  text: "Karad",
                  link: "https://www.swiggy.com/city/karad",
                },
                {
                  text: "Krishnagiri",
                  link: "https://www.swiggy.com/city/krishnagiri",
                },
                {
                  text: "Tiptur",
                  link: "https://www.swiggy.com/city/tiptur",
                },
                {
                  text: "Bhadrachalam",
                  link: "https://www.swiggy.com/city/bhadrachalam",
                },
                {
                  text: "Mancherial",
                  link: "https://www.swiggy.com/city/mancherial",
                },
                {
                  text: "Balrampur",
                  link: "https://www.swiggy.com/city/balrampur",
                },
                {
                  text: "Bharabanki",
                  link: "https://www.swiggy.com/city/bharabanki",
                },
                {
                  text: "Malout",
                  link: "https://www.swiggy.com/city/malout",
                },
                {
                  text: "Fatehgarh Sahib",
                  link: "https://www.swiggy.com/city/fatehgarh-sahib",
                },
                {
                  text: "Ropar",
                  link: "https://www.swiggy.com/city/ropar",
                },
                {
                  text: "Nangal",
                  link: "https://www.swiggy.com/city/nangal",
                },
                {
                  text: "Narnaul",
                  link: "https://www.swiggy.com/city/narnaul",
                },
                {
                  text: "Naraingarh",
                  link: "https://www.swiggy.com/city/naraingarh",
                },
                {
                  text: "Himmatnagar",
                  link: "https://www.swiggy.com/city/himmatnagar",
                },
                {
                  text: "Dausa",
                  link: "https://www.swiggy.com/city/dausa",
                },
                {
                  text: "Jahanabad",
                  link: "https://www.swiggy.com/city/jahanabad",
                },
                {
                  text: "Samastipur",
                  link: "https://www.swiggy.com/city/samastipur",
                },
                {
                  text: "Purnea",
                  link: "https://www.swiggy.com/city/purnea",
                },
                {
                  text: "Berhampur",
                  link: "https://www.swiggy.com/city/berhampur",
                },
                {
                  text: "Malda",
                  link: "https://www.swiggy.com/city/malda",
                },
                {
                  text: "Tuni",
                  link: "https://www.swiggy.com/city/tuni",
                },
                {
                  text: "Puttur",
                  link: "https://www.swiggy.com/city/puttur",
                },
                {
                  text: "Rayachoty",
                  link: "https://www.swiggy.com/city/rayachoty",
                },
                {
                  text: "Medak",
                  link: "https://www.swiggy.com/city/medak",
                },
                {
                  text: "Nirmal",
                  link: "https://www.swiggy.com/city/nirmal",
                },
                {
                  text: "Mirzapur",
                  link: "https://www.swiggy.com/city/mirzapur",
                },
                {
                  text: "Tanuku",
                  link: "https://www.swiggy.com/city/tanuku",
                },
                {
                  text: "Dahod",
                  link: "https://www.swiggy.com/city/dahod",
                },
                {
                  text: "Barmer",
                  link: "https://www.swiggy.com/city/barmer",
                },
                {
                  text: "Gangapur City",
                  link: "https://www.swiggy.com/city/gangapur-city",
                },
                {
                  text: "Mandi Gobindgarh",
                  link: "https://www.swiggy.com/city/mandi-gobindgarh",
                },
                {
                  text: "Tarn Taran Sahib",
                  link: "https://www.swiggy.com/city/tarn-taran-sahib",
                },
                {
                  text: "Nakodar",
                  link: "https://www.swiggy.com/city/nakodar",
                },
                {
                  text: "Ankleshwar",
                  link: "https://www.swiggy.com/city/ankleshwar",
                },
                {
                  text: "Vyara",
                  link: "https://www.swiggy.com/city/vyara",
                },
                {
                  text: "Bardoli",
                  link: "https://www.swiggy.com/city/bardoli",
                },
                {
                  text: "Halol",
                  link: "https://www.swiggy.com/city/halol",
                },
                {
                  text: "Bijnor",
                  link: "https://www.swiggy.com/city/bijnor",
                },
                {
                  text: "Sawantwadi",
                  link: "https://www.swiggy.com/city/sawantwadi",
                },
                {
                  text: "Shrirampur",
                  link: "https://www.swiggy.com/city/shrirampur",
                },
                {
                  text: "Sangamner",
                  link: "https://www.swiggy.com/city/sangamner",
                },
                {
                  text: "Baramati",
                  link: "https://www.swiggy.com/city/baramati",
                },
                {
                  text: "Betul",
                  link: "https://www.swiggy.com/city/betul",
                },
                {
                  text: "Chhatarpur",
                  link: "https://www.swiggy.com/city/chhatarpur",
                },
                {
                  text: "Datia",
                  link: "https://www.swiggy.com/city/datia",
                },
                {
                  text: "Balaghat",
                  link: "https://www.swiggy.com/city/balaghat",
                },
                {
                  text: "Sivakasi",
                  link: "https://www.swiggy.com/city/sivakasi",
                },
                {
                  text: "Viluppuram",
                  link: "https://www.swiggy.com/city/viluppuram",
                },
                {
                  text: "Ramanathapuram",
                  link: "https://www.swiggy.com/city/ramanathapuram",
                },
                {
                  text: "Sirsi",
                  link: "https://www.swiggy.com/city/sirsi",
                },
                {
                  text: "Kodaikanal",
                  link: "https://www.swiggy.com/city/kodaikanal",
                },
                {
                  text: "Theni",
                  link: "https://www.swiggy.com/city/theni",
                },
                {
                  text: "Karur",
                  link: "https://www.swiggy.com/city/karur",
                },
                {
                  text: "Karwar",
                  link: "https://www.swiggy.com/city/karwar",
                },
                {
                  text: "Sindhanur",
                  link: "https://www.swiggy.com/city/sindhanur",
                },
                {
                  text: "Kannur",
                  link: "https://www.swiggy.com/city/kannur",
                },
                {
                  text: "Noida 1",
                  link: "https://www.swiggy.com/city/noida-1",
                },
                {
                  text: "Karunagappaly",
                  link: "https://www.swiggy.com/city/karunagappaly",
                },
                {
                  text: "Thiruvalla",
                  link: "https://www.swiggy.com/city/thiruvalla",
                },
                {
                  text: "Thodupuzha",
                  link: "https://www.swiggy.com/city/thodupuzha",
                },
                {
                  text: "Kadiri",
                  link: "https://www.swiggy.com/city/kadiri",
                },
                {
                  text: "Kavali",
                  link: "https://www.swiggy.com/city/kavali",
                },
                {
                  text: "Tezpur",
                  link: "https://www.swiggy.com/city/tezpur",
                },
                {
                  text: "Kayamkulam",
                  link: "https://www.swiggy.com/city/kayamkulam",
                },
                {
                  text: "Kottarakkara",
                  link: "https://www.swiggy.com/city/kottarakkara",
                },
                {
                  text: "Mandi Dabwali",
                  link: "https://www.swiggy.com/city/mandi-dabwali",
                },
                {
                  text: "Fatehabad",
                  link: "https://www.swiggy.com/city/fatehabad",
                },
                {
                  text: "Jagraon",
                  link: "https://www.swiggy.com/city/jagraon",
                },
                {
                  text: "Mansa",
                  link: "https://www.swiggy.com/city/mansa",
                },
                {
                  text: "Pinjore City",
                  link: "https://www.swiggy.com/city/pinjore-city",
                },
                {
                  text: "Fazilka",
                  link: "https://www.swiggy.com/city/fazilka",
                },
                {
                  text: "Baddi",
                  link: "https://www.swiggy.com/city/baddi",
                },
                {
                  text: "Solan",
                  link: "https://www.swiggy.com/city/solan",
                },
                {
                  text: "Daltonganj",
                  link: "https://www.swiggy.com/city/daltonganj",
                },
                {
                  text: "Balangir",
                  link: "https://www.swiggy.com/city/balangir",
                },
                {
                  text: "Paonta Sahib",
                  link: "https://www.swiggy.com/city/paonta-sahib",
                },
                {
                  text: "Kothagudem",
                  link: "https://www.swiggy.com/city/kothagudem",
                },
                {
                  text: "Hansi",
                  link: "https://www.swiggy.com/city/hansi",
                },
                {
                  text: "Aurangabad_Bihar",
                  link: "https://www.swiggy.com/city/aurangabadbihar",
                },
                {
                  text: "Charkhi Dadri",
                  link: "https://www.swiggy.com/city/charkhi-dadri",
                },
                {
                  text: "Gopalganj",
                  link: "https://www.swiggy.com/city/gopalganj",
                },
                {
                  text: "Jharsuguda",
                  link: "https://www.swiggy.com/city/jharsuguda",
                },
                {
                  text: "Tohana",
                  link: "https://www.swiggy.com/city/tohana",
                },
                {
                  text: "Jhalawar",
                  link: "https://www.swiggy.com/city/jhalawar",
                },
                {
                  text: "Sivasagar",
                  link: "https://www.swiggy.com/city/sivasagar",
                },
                {
                  text: "Bagdogra",
                  link: "https://www.swiggy.com/city/bagdogra",
                },
                {
                  text: "Angul",
                  link: "https://www.swiggy.com/city/angul",
                },
                {
                  text: "Kendrapada",
                  link: "https://www.swiggy.com/city/kendrapada",
                },
                {
                  text: "Mallapuram (Do not Use)",
                  link: "https://www.swiggy.com/city/mallapuram-do-not-use",
                },
                {
                  text: "Veraval",
                  link: "https://www.swiggy.com/city/veraval",
                },
                {
                  text: "Daman",
                  link: "https://www.swiggy.com/city/daman",
                },
                {
                  text: "Chiplun",
                  link: "https://www.swiggy.com/city/chiplun",
                },
                {
                  text: "Silvassa",
                  link: "https://www.swiggy.com/city/silvassa",
                },
                {
                  text: "Bapatla&Chirala",
                  link: "https://www.swiggy.com/city/bapatla-and-chirala",
                },
                {
                  text: "Lonavla",
                  link: "https://www.swiggy.com/city/lonavla",
                },
                {
                  text: "Bongaigaon",
                  link: "https://www.swiggy.com/city/bongaigaon",
                },
                {
                  text: "Golaghat",
                  link: "https://www.swiggy.com/city/golaghat",
                },
                {
                  text: "Duliajan",
                  link: "https://www.swiggy.com/city/duliajan",
                },
                {
                  text: "Ramnagar",
                  link: "https://www.swiggy.com/city/ramnagar",
                },
                {
                  text: "Bolpur",
                  link: "https://www.swiggy.com/city/bolpur",
                },
                {
                  text: "Madhubani",
                  link: "https://www.swiggy.com/city/madhubani",
                },
                {
                  text: "Balasore",
                  link: "https://www.swiggy.com/city/balasore",
                },
                {
                  text: "Palampur",
                  link: "https://www.swiggy.com/city/palampur",
                },
                {
                  text: "Kotdwar",
                  link: "https://www.swiggy.com/city/kotdwar",
                },
                {
                  text: "Koppal",
                  link: "https://www.swiggy.com/city/koppal",
                },
                {
                  text: "Chikhli",
                  link: "https://www.swiggy.com/city/chikhli",
                },
                {
                  text: "Dahanu",
                  link: "https://www.swiggy.com/city/dahanu",
                },
                {
                  text: "Itanagar",
                  link: "https://www.swiggy.com/city/itanagar",
                },
                {
                  text: "Rangpo",
                  link: "https://www.swiggy.com/city/rangpo",
                },
                {
                  text: "Aizawl",
                  link: "https://www.swiggy.com/city/aizawl",
                },
                {
                  text: "Gangtok",
                  link: "https://www.swiggy.com/city/gangtok",
                },
                {
                  text: "Mayiladuthurai",
                  link: "https://www.swiggy.com/city/mayiladuthurai",
                },
                {
                  text: "Kannauj",
                  link: "https://www.swiggy.com/city/kannauj",
                },
                {
                  text: "Cooch Behar",
                  link: "https://www.swiggy.com/city/cooch-behar",
                },
                {
                  text: "Jaigaon",
                  link: "https://www.swiggy.com/city/jaigaon",
                },
                {
                  text: "Palani",
                  link: "https://www.swiggy.com/city/palani",
                },
                {
                  text: "Bilimora",
                  link: "https://www.swiggy.com/city/bilimora",
                },
                {
                  text: "Udhampur",
                  link: "https://www.swiggy.com/city/udhampur",
                },
                {
                  text: "Boisar",
                  link: "https://www.swiggy.com/city/boisar",
                },
                {
                  text: "Kohima",
                  link: "https://www.swiggy.com/city/kohima",
                },
                {
                  text: "Naharlagun",
                  link: "https://www.swiggy.com/city/naharlagun",
                },
                {
                  text: "Dumka",
                  link: "https://www.swiggy.com/city/dumka",
                },
                {
                  text: "Rajsamand",
                  link: "https://www.swiggy.com/city/rajsamand",
                },
                {
                  text: "Gauriganj",
                  link: "https://www.swiggy.com/city/gauriganj",
                },
                {
                  text: "Bodinayakanur",
                  link: "https://www.swiggy.com/city/bodinayakanur",
                },
                {
                  text: "Bhawanipatna",
                  link: "https://www.swiggy.com/city/bhawanipatna",
                },
                {
                  text: "Baran",
                  link: "https://www.swiggy.com/city/baran",
                },
                {
                  text: "Narsinghpur",
                  link: "https://www.swiggy.com/city/narsinghpur",
                },
                {
                  text: "Uran Islampur",
                  link: "https://www.swiggy.com/city/uran-islampur",
                },
                {
                  text: "Kovilpatti",
                  link: "https://www.swiggy.com/city/kovilpatti",
                },
                {
                  text: "Kasaragod",
                  link: "https://www.swiggy.com/city/kasaragod",
                },
                {
                  text: "Pusad",
                  link: "https://www.swiggy.com/city/pusad",
                },
                {
                  text: "Kendujhar",
                  link: "https://www.swiggy.com/city/kendujhar",
                },
                {
                  text: "Manali",
                  link: "https://www.swiggy.com/city/manali",
                },
                {
                  text: "Diu",
                  link: "https://www.swiggy.com/city/diu",
                },
                {
                  text: "Khamgaon",
                  link: "https://www.swiggy.com/city/khamgaon",
                },
                {
                  text: "Ramanagara",
                  link: "https://www.swiggy.com/city/ramanagara",
                },
                {
                  text: "Alipurduar",
                  link: "https://www.swiggy.com/city/alipurduar",
                },
                {
                  text: "Almora",
                  link: "https://www.swiggy.com/city/almora",
                },
                {
                  text: "Jhargram",
                  link: "https://www.swiggy.com/city/jhargram",
                },
                {
                  text: "Arambagh",
                  link: "https://www.swiggy.com/city/arambagh",
                },
                {
                  text: "Bhadohi",
                  link: "https://www.swiggy.com/city/bhadohi",
                },
                {
                  text: "Tenkasi",
                  link: "https://www.swiggy.com/city/tenkasi",
                },
                {
                  text: "Srivilliputhur",
                  link: "https://www.swiggy.com/city/srivilliputhur",
                },
                {
                  text: "Chidambaram",
                  link: "https://www.swiggy.com/city/chidambaram",
                },
                {
                  text: "Rajgarh",
                  link: "https://www.swiggy.com/city/rajgarh",
                },
                {
                  text: "Pratapgarh",
                  link: "https://www.swiggy.com/city/pratapgarh",
                },
                {
                  text: "Washim",
                  link: "https://www.swiggy.com/city/washim",
                },
                {
                  text: "Mandi HP",
                  link: "https://www.swiggy.com/city/mandi-hp",
                },
                {
                  text: "Ranaghat",
                  link: "https://www.swiggy.com/city/ranaghat",
                },
                {
                  text: "Raghunathpur",
                  link: "https://www.swiggy.com/city/raghunathpur",
                },
                {
                  text: "Suri",
                  link: "https://www.swiggy.com/city/suri",
                },
                {
                  text: "Kadayanallur",
                  link: "https://www.swiggy.com/city/kadayanallur",
                },
                {
                  text: "Thiruvarur",
                  link: "https://www.swiggy.com/city/thiruvarur",
                },
                {
                  text: "Ranaghat-WB",
                  link: "https://www.swiggy.com/city/ranaghat-wb",
                },
                {
                  text: "Idukki",
                  link: "https://www.swiggy.com/city/idukki",
                },
                {
                  text: "Wayanad",
                  link: "https://www.swiggy.com/city/wayanad",
                },
                {
                  text: "Perambalur",
                  link: "https://www.swiggy.com/city/perambalur",
                },
                {
                  text: "Paramakudi",
                  link: "https://www.swiggy.com/city/paramakudi",
                },
                {
                  text: "Khopoli",
                  link: "https://www.swiggy.com/city/khopoli",
                },
                {
                  text: "Bela Pratapgarh",
                  link: "https://www.swiggy.com/city/bela-pratapgarh",
                },
                {
                  text: "Mahoba",
                  link: "https://www.swiggy.com/city/mahoba",
                },
                {
                  text: "Sitamarhi",
                  link: "https://www.swiggy.com/city/sitamarhi",
                },
                {
                  text: "Chakdaha",
                  link: "https://www.swiggy.com/city/chakdaha",
                },
                {
                  text: "Khalilabad",
                  link: "https://www.swiggy.com/city/khalilabad",
                },
                {
                  text: "Pattukkottai",
                  link: "https://www.swiggy.com/city/pattukkottai",
                },
                {
                  text: "Tindivanam",
                  link: "https://www.swiggy.com/city/tindivanam",
                },
                {
                  text: "Tiruttani",
                  link: "https://www.swiggy.com/city/tiruttani",
                },
                {
                  text: "Gangarampur",
                  link: "https://www.swiggy.com/city/gangarampur",
                },
                {
                  text: "Dharapuram",
                  link: "https://www.swiggy.com/city/dharapuram",
                },
                {
                  text: "Arakkonam",
                  link: "https://www.swiggy.com/city/arakkonam",
                },
                {
                  text: "Sirkali",
                  link: "https://www.swiggy.com/city/sirkali",
                },
                {
                  text: "Aruppukottai",
                  link: "https://www.swiggy.com/city/aruppukottai",
                },
                {
                  text: "Mettupalayam",
                  link: "https://www.swiggy.com/city/mettupalayam",
                },
                {
                  text: "Digboi",
                  link: "https://www.swiggy.com/city/digboi",
                },
                {
                  text: "Biswanath Chariali",
                  link: "https://www.swiggy.com/city/biswanath-chariali",
                },
                {
                  text: "Nalbari",
                  link: "https://www.swiggy.com/city/nalbari",
                },
                {
                  text: "Shirdi city",
                  link: "https://www.swiggy.com/city/shirdi-city",
                },
                {
                  text: "Mukerian",
                  link: "https://www.swiggy.com/city/mukerian",
                },
                {
                  text: "Hosur",
                  link: "https://www.swiggy.com/city/hosur",
                },
                {
                  text: "Palakollu",
                  link: "https://www.swiggy.com/city/palakollu",
                },
                {
                  text: "Amalapuram",
                  link: "https://www.swiggy.com/city/amalapuram",
                },
                {
                  text: "Ravulapalem",
                  link: "https://www.swiggy.com/city/ravulapalem",
                },
                {
                  text: "Narsipatnam",
                  link: "https://www.swiggy.com/city/narsipatnam",
                },
                {
                  text: "Barh",
                  link: "https://www.swiggy.com/city/barh",
                },
                {
                  text: "Palghar",
                  link: "https://www.swiggy.com/city/palghar",
                },
                {
                  text: "Shahdol",
                  link: "https://www.swiggy.com/city/shahdol",
                },
                {
                  text: "Kushalnagar",
                  link: "https://www.swiggy.com/city/kushalnagar",
                },
                {
                  text: "Dungarpur",
                  link: "https://www.swiggy.com/city/dungarpur",
                },
                {
                  text: "Chaibasa",
                  link: "https://www.swiggy.com/city/chaibasa",
                },
                {
                  text: "Haveri",
                  link: "https://www.swiggy.com/city/haveri",
                },
                {
                  text: "Karaikal",
                  link: "https://www.swiggy.com/city/karaikal",
                },
                {
                  text: "Jjajjar",
                  link: "https://www.swiggy.com/city/jjajjar",
                },
                {
                  text: "Kokrajhar",
                  link: "https://www.swiggy.com/city/kokrajhar",
                },
                {
                  text: "Rangia",
                  link: "https://www.swiggy.com/city/rangia",
                },
                {
                  text: "Hamirpur",
                  link: "https://www.swiggy.com/city/hamirpur",
                },
                {
                  text: "Una",
                  link: "https://www.swiggy.com/city/una",
                },
                {
                  text: "Sulthan Bathery",
                  link: "https://www.swiggy.com/city/sulthan-bathery",
                },
                {
                  text: "Rayagada",
                  link: "https://www.swiggy.com/city/rayagada",
                },
                {
                  text: "Paradeep",
                  link: "https://www.swiggy.com/city/paradeep",
                },
                {
                  text: "Mandapeta",
                  link: "https://www.swiggy.com/city/mandapeta",
                },
                {
                  text: "Jamui",
                  link: "https://www.swiggy.com/city/jamui",
                },
                {
                  text: "Pilkhuwa",
                  link: "https://www.swiggy.com/city/pilkhuwa",
                },
                {
                  text: "Parvathipuram",
                  link: "https://www.swiggy.com/city/parvathipuram",
                },
                {
                  text: "Ambajogai",
                  link: "https://www.swiggy.com/city/ambajogai",
                },
                {
                  text: "Araria",
                  link: "https://www.swiggy.com/city/araria",
                },
                {
                  text: "North Lakhimpur",
                  link: "https://www.swiggy.com/city/north-lakhimpur",
                },
                {
                  text: "Rajampet",
                  link: "https://www.swiggy.com/city/rajampet",
                },
                {
                  text: "Udumalaipettai",
                  link: "https://www.swiggy.com/city/udumalaipettai",
                },
                {
                  text: "Tirupattur",
                  link: "https://www.swiggy.com/city/tirupattur",
                },
                {
                  text: "Hojai",
                  link: "https://www.swiggy.com/city/hojai",
                },
                {
                  text: "Khagaria",
                  link: "https://www.swiggy.com/city/khagaria",
                },
                {
                  text: "Dasuya",
                  link: "https://www.swiggy.com/city/dasuya",
                },
                {
                  text: "Gudur",
                  link: "https://www.swiggy.com/city/gudur",
                },
                {
                  text: "Sullurpeta",
                  link: "https://www.swiggy.com/city/sullurpeta",
                },
                {
                  text: "Piler",
                  link: "https://www.swiggy.com/city/piler",
                },
                {
                  text: "SankaranKoil",
                  link: "https://www.swiggy.com/city/sankarankoil",
                },
                {
                  text: "Nabha",
                  link: "https://www.swiggy.com/city/nabha",
                },
                {
                  text: "LPU - Phagwara",
                  link: "https://www.swiggy.com/city/lpu-phagwara",
                },
                {
                  text: "Jangipur",
                  link: "https://www.swiggy.com/city/jangipur",
                },
                {
                  text: "Roha",
                  link: "https://www.swiggy.com/city/roha",
                },
                {
                  text: "Maharajganj",
                  link: "https://www.swiggy.com/city/maharajganj",
                },
                {
                  text: "Kallakurichi",
                  link: "https://www.swiggy.com/city/kallakurichi",
                },
                {
                  text: "Kalimpong",
                  link: "https://www.swiggy.com/city/kalimpong",
                },
                {
                  text: "Sundernagar",
                  link: "https://www.swiggy.com/city/sundernagar",
                },
                {
                  text: "Nawada",
                  link: "https://www.swiggy.com/city/nawada",
                },
                {
                  text: "Forbesganj",
                  link: "https://www.swiggy.com/city/forbesganj",
                },
                {
                  text: "Mokameh Khas",
                  link: "https://www.swiggy.com/city/mokameh-khas",
                },
                {
                  text: "Bazpur",
                  link: "https://www.swiggy.com/city/bazpur",
                },
                {
                  text: "Lakhisarai",
                  link: "https://www.swiggy.com/city/lakhisarai",
                },
                {
                  text: "Rameswaram",
                  link: "https://www.swiggy.com/city/rameswaram",
                },
                {
                  text: "Sahjanwa",
                  link: "https://www.swiggy.com/city/sahjanwa",
                },
                {
                  text: "Siddharthnagar",
                  link: "https://www.swiggy.com/city/siddharthnagar",
                },
                {
                  text: "Nanjangud",
                  link: "https://www.swiggy.com/city/nanjangud",
                },
                {
                  text: "Chamarajanagar",
                  link: "https://www.swiggy.com/city/chamarajanagar",
                },
                {
                  text: "Kurali",
                  link: "https://www.swiggy.com/city/kurali",
                },
                {
                  text: "Sundar Nagar",
                  link: "https://www.swiggy.com/city/sundar-nagar",
                },
                {
                  text: "Bobbili",
                  link: "https://www.swiggy.com/city/bobbili",
                },
                {
                  text: "Jangaon",
                  link: "https://www.swiggy.com/city/jangaon",
                },
                {
                  text: "Banswara",
                  link: "https://www.swiggy.com/city/banswara",
                },
                {
                  text: "Sundergarh",
                  link: "https://www.swiggy.com/city/sundergarh",
                },
                {
                  text: "Godda",
                  link: "https://www.swiggy.com/city/godda",
                },
                {
                  text: "Madhupur",
                  link: "https://www.swiggy.com/city/madhupur",
                },
                {
                  text: "Katwa",
                  link: "https://www.swiggy.com/city/katwa",
                },
                {
                  text: "Dhupguri",
                  link: "https://www.swiggy.com/city/dhupguri",
                },
                {
                  text: "Contai",
                  link: "https://www.swiggy.com/city/contai",
                },
                {
                  text: "Baramulla",
                  link: "https://www.swiggy.com/city/baramulla",
                },
                {
                  text: "Kangeyam",
                  link: "https://www.swiggy.com/city/kangeyam",
                },
                {
                  text: "Naugachia",
                  link: "https://www.swiggy.com/city/naugachia",
                },
                {
                  text: "Madhepura",
                  link: "https://www.swiggy.com/city/madhepura",
                },
                {
                  text: "Jamkhambhaliya",
                  link: "https://www.swiggy.com/city/jamkhambhaliya",
                },
                {
                  text: "Mundra",
                  link: "https://www.swiggy.com/city/mundra",
                },
                {
                  text: "Patan",
                  link: "https://www.swiggy.com/city/patan",
                },
                {
                  text: "Mahuva",
                  link: "https://www.swiggy.com/city/mahuva",
                },
                {
                  text: "Attur",
                  link: "https://www.swiggy.com/city/attur",
                },
                {
                  text: "Pen",
                  link: "https://www.swiggy.com/city/pen",
                },
                {
                  text: "Mandla",
                  link: "https://www.swiggy.com/city/mandla",
                },
                {
                  text: "Sidhi",
                  link: "https://www.swiggy.com/city/sidhi",
                },
                {
                  text: "Lakshadweep",
                  link: "https://www.swiggy.com/city/lakshadweep",
                },
                {
                  text: "Chitrakoot",
                  link: "https://www.swiggy.com/city/chitrakoot",
                },
                {
                  text: "Rajam",
                  link: "https://www.swiggy.com/city/rajam",
                },
                {
                  text: "Nippani",
                  link: "https://www.swiggy.com/city/nippani",
                },
                {
                  text: "Sankeshwar",
                  link: "https://www.swiggy.com/city/sankeshwar",
                },
                {
                  text: "Chikkodi",
                  link: "https://www.swiggy.com/city/chikkodi",
                },
                {
                  text: "Modasa",
                  link: "https://www.swiggy.com/city/modasa",
                },
                {
                  text: "Bavla",
                  link: "https://www.swiggy.com/city/bavla",
                },
                {
                  text: "Puttur_AP",
                  link: "https://www.swiggy.com/city/puttur-ap",
                },
                {
                  text: "Sinnar",
                  link: "https://www.swiggy.com/city/sinnar",
                },
                {
                  text: "singur",
                  link: "https://www.swiggy.com/city/singur",
                },
                {
                  text: "Nelamangala",
                  link: "https://www.swiggy.com/city/nelamangala",
                },
                {
                  text: "Srinagar Uttarakhand",
                  link: "https://www.swiggy.com/city/srinagar-uttarakhand",
                },
                {
                  text: "Dhampur",
                  link: "https://www.swiggy.com/city/dhampur",
                },
              ],
              id: "footer_content",
            },
          },
        },
        {
          card: {
            card: {
              "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
              citySlug: "lucknow",
              lat: "26.8311631",
              lng: "80.9242563",
              userAgent:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
              gandalfRequest:
                '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-43e64b59-9a83-497d-a1fd-ed0e83d929f4","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE","businessLine":"FOOD"}}',
              id: "meta_data",
              metaInfo: {
                pageType: "FOOD_HOME_PAGE",
                pageTitle:
                  "Order Food Online from India's Best Food Delivery Service | Swiggy",
                pageMetaDescription:
                  "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
                pageKeywords:
                  "Food delivery, Online food order, Online food dleivery",
              },
              screenType: "filteredCollection",
              seoParams: {
                apiName: "FoodHomePage",
                seoUrl: "www.swiggy.com",
                pageType: "FOOD_HOME_PAGE",
                businessLine: "FOOD",
              },
              pageContext: {
                citySlug: "lucknow",
                cityName: "Lucknow",
                pageType: "FOOD_HOME_PAGE",
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      cacheExpiryTime: 240,
      nextFetch: 1,
      configs: {
        POPUP: {
          configInfo: [
            {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.IplFloatyWidget",
                widgetId: "IplCommonFloatyWidget_JHS",
                action: {
                  link: "swiggy://restaurantList",
                },
                offerCallout: "66% OFF",
                popupConfig: {
                  collapseText: "Swiggy Sixes",
                  sixExpandText: [
                    "A SIX is hit! Offers unlocked",
                    "66% off unlocked  only for 6 min",
                  ],
                  consecutiveSixHitExpandText: [
                    "Woohoo! Another SIX is hit",
                    "The timer has reset!",
                  ],
                  matchHoursExpandText: [
                    "Offer unlocks when a six is hit!",
                    "66% off unlocks  only for 6 min",
                  ],
                  timeUpExpandText: [
                    "Uh-oh. Time’s up!",
                    "Stay tuned for the next six!",
                  ],
                  animationDuration: "2",
                  anchorAssetId: "portal/m/Floaty%20ball%204.png",
                  bottomStripAssetId: "portal/m/bottom%20asset%202.png",
                  slideOutStripAssetId: "portal/m/Expanded%20state%20(1).png",
                  closeIconId: "close_icon_asset_id",
                  expandedTextStyle: {
                    color: "#FF0000",
                    font: "FONT_NAME_V2_OVERLINE_NEUTRAL_MEDIUM",
                  },
                  collapseTextStyle: {
                    color: "#000000",
                    font: "FONT_NAME_HEADER_H3_BIGGER",
                  },
                },
                pollConfig: {},
                bannerId: "8317879",
                entityId: "8317879",
                entityType: "BANNER",
                frequencyCapping: {},
              },
            },
          ],
        },
      },
    },
    tid: "6b0230b0-1e0b-46e6-a658-07c384c4051f",
    sid: "q4916bc2639-bf44-4b10-8218-0170a244e",
    deviceId: "e14bb5e5-86c1-466a-3571-2cbe03d25446",
    csrfToken: "CH91hXS8NOzE-SMl9n5CHAEftACjtoCnl99ITxZQ",
  });
});
app.get("restaurant/menu", (req, res) => {
  res.json({
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              text: "Daya Restaurant",
              headerStyling: {
                textColor: "text_Highest_Emphasis",
                textVariant: "header_H3_Black",
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
              tabs: [
                {
                  id: "Order Online",
                  title: "Order Online",
                },
              ],
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "1125249",
                name: "Daya Restaurant",
                city: "Maharajganj",
                slugs: {
                  restaurant:
                    "daya-restaurant-maharajganj-new-maharajganj-new-2",
                  city: "maharajganj",
                },
                uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/c111ad41-9730-4b54-9870-692a335a5191_1125249.jpg",
                locality: "Maharajganj New",
                areaName: "Maharajganj New",
                costForTwo: "29900",
                costForTwoMessage: "₹299 for two",
                cuisines: ["Fast Food", "North Indian"],
                avgRating: 3.4,
                veg: true,
                feeDetails: {
                  restaurantId: "1125249",
                  fees: [{}],
                },
                parentId: "403504",
                avgRatingString: "3.4",
                totalRatingsString: "22 ratings",
                sla: {
                  restaurantId: "1125249",
                  deliveryTime: 23,
                  minDeliveryTime: 20,
                  maxDeliveryTime: 25,
                  lastMileTravel: 1.4,
                  serviceability: "SERVICEABLE",
                  stressFactor: 1,
                  rainMode: "RAIN_MODE_NONE",
                  longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                  zoneId: 4623,
                  slaString: "20-25 MINS",
                  lastMileTravelString: "1.4 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2026-03-08 22:00:00",
                  visibility: true,
                  opened: true,
                  restaurantClosedMeta: {},
                },
                aggregatedDiscountInfo: {
                  header: "Get items under 29",
                  shortDescriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹150 off on orders above ₹199",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹150 off on orders above ₹199 | Use code FLAT150",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  visible: true,
                },
                badges: {},
                slugString: "daya-restaurant-maharajganj-new-maharajganj-new-2",
                isOpen: true,
                labels: [
                  {
                    title: "Timings",
                    message: "null",
                  },
                  {
                    title: "Address",
                    message:
                      "Shop No : Shop no 0 , Floor :  , PHARENDA ROAD MAHARAJGANJ ,Maharajganj Tahsil , ",
                  },
                  {
                    title: "Cuisines",
                    message: "Fast Food,North Indian",
                  },
                ],
                totalRatings: 22,
                aggregatedDiscountInfoV2: {
                  header: "Get items under 29",
                  shortDescriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹150 off on orders above ₹199",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "99 store",
                      discountType: "FinalPrice",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "Flat ₹150 off on orders above ₹199 | Use code FLAT150",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                  ],
                  couponDetailsCta: "View coupon details",
                },
                type: "F",
                nudgeBanners: [
                  {
                    priority: 6,
                    discountInfo: {
                      discountType: "FinalPrice",
                      value: 149,
                    },
                    unlockedMessage: "Deal of the Day unlocked!",
                    minItemCount: 1,
                    maxItemCount: 1,
                    type: "SILD",
                    nudgeTagInfo: {
                      title: "Deal of the Day",
                      fontName: "FONT_NAME_CONDENSED_BOLD",
                    },
                    logoCtx: {},
                    movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                  },
                ],
                headerBanner: {
                  url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/1125249",
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {
                    logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                  },
                  freedelMessage: "Free delivery on orders above ₹199",
                },
                ratingSlab: "RATING_SLAB_4",
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                  commsStyling: {},
                },
                hasBestsellerItems: true,
                cartOrderabilityNudgeBanner: {
                  parameters: {},
                  presentation: {},
                },
                latLong: "27.1438625,83.5565469",
                backgroundImageOverlayInfo: {},
                menuHeaderLottie: {
                  menuHeaderLottie:
                    "https://media-assets.swiggy.com/bolt/bolt%2015%20black.json?updatedAt=1733379625251",
                  frequencyCapping: {},
                },
                featuredSectionInfo: {},
                requestContexts: ["enable_ecosaver", "99store"],
                hasBoltItems: true,
              },
              analytics: {},
            },
            relevance: {
              type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
              sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              layout: {
                rows: 1,
                columns: 5,
                horizontalScrollEnabled: true,
                itemSpacing: 12,
                lineSpacing: 10,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 10,
                    right: 10,
                    bottom: 16,
                  },
                },
              },
              id: "offerCollectionWidget_UX4",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  offers: [
                    {
                      info: {
                        header: "Extra ₹50 off",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                        offerIds: ["e205b4b1-4910-4e15-8149-bc951d18826a"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        description: "NO CODE REQUIRED | ABOVE ₹99",
                        offerType: "offers",
                        restId: "1125249",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "ITEMS AT ₹29",
                        offerTag: "DEAL OF DAY",
                        offerTagColor: "#E46D47",
                        offerIds: ["2461257e-9ffb-42c1-a270-ce8194926fad"],
                        expiryTime: "1970-01-01T08:04:15Z",
                        description: "ON SELECT ITEMS |",
                        offerType: "offers",
                        restId: "1125249",
                        offerLogo: "offers/deal-of-day",
                        descriptionTextColor: "#7302060C",
                        showExpiryTimer: true,
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹150 OFF",
                        offerTag: "FLAT DEAL",
                        offerTagColor: "#E46D47",
                        offerIds: ["55f7463c-d709-4dab-93f8-90bb9410ffaa"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE FLAT150",
                        description: "ABOVE ₹199",
                        offerType: "offers",
                        restId: "1125249",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE FLAT150",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "50% OFF UPTO ₹100",
                        offerTagColor: "#E46D47",
                        offerIds: ["462f5c16-74c0-4430-928f-a1dae70e9355"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE TRYNEW",
                        description: "ABOVE ₹179",
                        offerType: "offers",
                        restId: "1125249",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE TRYNEW",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "10% OFF UPTO ₹100",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2026/2/28/ea654f16-3981-4917-b1a6-6fd5be137534_HSBC.png",
                        offerIds: ["45172884-dd97-4d0f-9f50-88f4a013856e"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE HSBCFEST",
                        description: "ABOVE ₹749",
                        offerType: "offers",
                        restId: "1125249",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2026/2/28/ea654f16-3981-4917-b1a6-6fd5be137534_HSBC.png",
                        descriptionTextColor: "#7302060C",
                        primaryDescription: "USE HSBCFEST",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                  ],
                  habitMilestoneInfo: {
                    callout: {},
                  },
                  loyaltyDiscoverPresentationInfo: {
                    logoCtx: {},
                  },
                },
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        isPureVeg: true,
                        badges: {},
                        vegOnlyDetails: {
                          imageId: "AutoVegOnly_qkjowj",
                          title: "Showing only vegetarian options.",
                          description:
                            "Tap on the VEG ONLY button to turn off the setting",
                        },
                        topRatedFilter: {
                          attributes: {
                            displayText: "Ratings 4.0+",
                          },
                        },
                        kidsCategoryFilter: {
                          attributes: {
                            displayText: "Kids Favourites",
                            tooltip: {
                              enabled: true,
                              displayText:
                                "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                            },
                          },
                        },
                        vegFilter: {
                          attributes: {
                            displayText: "VEG",
                          },
                        },
                        nonvegFilter: {
                          attributes: {
                            displayText: "NONVEG",
                          },
                        },
                        bolt: {
                          attributes: {
                            displayText: "Food in 10-15 mins",
                            displayImage: "bolt/bolt%2011.png",
                            unselectedDisplayImage: "bolt/bolt%2011.png",
                          },
                        },
                      },
                      relevance: {
                        type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                        sectionId: "MENU_FILTER_TOGGLE",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Recommended",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643432",
                                name: "Paneer handi",
                                category: "Main Course",
                                description:
                                  "Savor a rich, creamy delight brimming with aromatic spices and a luscious texture that captivates every palate.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/15/16111770-71d5-4967-9688-301ad8c9e86b_37b0bf31-348e-4017-9f02-08a9a4260a5d.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872309",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413680",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 20000,
                                          id: "190413681",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140598",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643465",
                                name: "Mushroom fried rice",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/85c4bbba-d443-40e7-a254-3c29d4e28f4d_1736bbb1-c3f1-4514-892c-f512d98550fe.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872320",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413702",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 9500,
                                          id: "190413703",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140585",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643459",
                                name: "Mushroom do pyaza",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/84db4635-ce65-454a-90ff-c71980f0dedf_57cade3b-e72b-41c4-aa8b-c65a209ecf56.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872317",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413696",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 22000,
                                          id: "190413697",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140584",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643421",
                                name: "Paneer biryani",
                                category: "Biriyani",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/674693c1-a39a-4c1e-ae4e-d5e06e7a7943_5f1d7e1c-9f56-4e6f-933e-601c2254808b.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                finalPrice: 13900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872303",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413668",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 10000,
                                          id: "190413669",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "a4f073da-e3d0-4a96-9d99-3a89025f73c2",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "63140591",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643420",
                                name: "Veg biryani",
                                category: "Biriyani",
                                description:
                                  "A fragrant medley of rice and fresh vegetables, this dish is a delightful harmony of flavors and aromas, perfect for any time of day.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/542adbf1-fbdf-42a9-b0b7-bc0bc5c2efe8_1f9a90cb-54d2-46a3-b93b-186836e4a155.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 10500,
                                finalPrice: 7500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872302",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413666",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 9000,
                                          id: "190413667",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.4",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "18b4121d-513e-42ba-a2c9-13018c5d7c04",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "63140625",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643429",
                                name: "Kadai paneer",
                                category: "Salad",
                                description: "Half",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/a41d2557-0927-44b9-b33e-3b713e7ff5fd_a9242b54-a20c-4c0f-b253-ae4a12a598b3.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872306",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413674",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 22900,
                                          id: "190413675",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418183",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643472",
                                name: "Paneer chilli",
                                category: "Noodles",
                                description:
                                  "Savor the delightful fusion of vibrant flavors and textures, where succulent cubes create a perfect harmony that's irresistible.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/78c34de0-0221-4574-9e59-6d24bb716d62_508c576c-c780-4029-84af-428561c495dd.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 20900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418191",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        type: "CATEGORY_TYPE_RECOMMENDED",
                        subtitleSuffix: {},
                        categoryId: "-1",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Main Course",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643442",
                                name: "Paneer pasanda",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/7/3/00a7a734-d79c-4439-a129-d9c7ef977793_566cea54-182a-48ee-9e22-4945b44636e2.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140606",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643437",
                                name: "Cheese tomato",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/10/14/b9ed1bd2-496b-46c9-8d8b-1f60ee617264_0e76bdd3-5e13-45c7-9ace-16fa7b705f79.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 25900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140563",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643452",
                                name: "Dum aloo",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/17/f3d521e8-57e4-442b-a738-bdca3d93e667_c3e8f05c-5081-4ec9-b443-fc3dc5df673b.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 19500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140568",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643432",
                                name: "Paneer handi",
                                category: "Main Course",
                                description:
                                  "Savor a rich, creamy delight brimming with aromatic spices and a luscious texture that captivates every palate.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/15/16111770-71d5-4967-9688-301ad8c9e86b_37b0bf31-348e-4017-9f02-08a9a4260a5d.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872309",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413680",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 20000,
                                          id: "190413681",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140598",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643465",
                                name: "Mushroom fried rice",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/85c4bbba-d443-40e7-a254-3c29d4e28f4d_1736bbb1-c3f1-4514-892c-f512d98550fe.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872320",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413702",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 9500,
                                          id: "190413703",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                parentId: "63140585",
                                menuFilterIds: [
                                  "BOLT",
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643438",
                                name: "Matar paneer",
                                category: "Main Course",
                                imageId: "a7xzjeiyddbvslbw9bxs",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872311",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413684",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 24900,
                                          id: "190413685",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140578",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643440",
                                name: "Paneer butter masala",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/7/16/ffb3f74a-26ab-4ca1-9582-cdc64f934b30_95cf77f0-e6b1-49de-9136-a94338084d66.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872313",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413688",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 27900,
                                          id: "190413689",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140593",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643433",
                                name: "Paneer do pyaza",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/baea9d58-74fa-4e07-80f4-426b83c01b71_1888ea01-b65f-4315-9499-301fbdd87afe.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872310",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413682",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 24900,
                                          id: "190413683",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140597",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643459",
                                name: "Mushroom do pyaza",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/84db4635-ce65-454a-90ff-c71980f0dedf_57cade3b-e72b-41c4-aa8b-c65a209ecf56.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872317",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413696",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 22000,
                                          id: "190413697",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140584",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643439",
                                name: "Palak paneer",
                                category: "Main Course",
                                imageId: "al76nl2inveavszojnq0",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872312",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413686",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 24900,
                                          id: "190413687",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140589",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643448",
                                name: "Rana paneer",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/0f991a9e-8e9b-4a5b-8903-c9ea435c808b_5a5ca9fe-f951-4f6b-a46c-3d6798c708d2.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140621",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643456",
                                name: "Kadhi pakoda",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/5018fb46-fe54-443f-bd7f-0ece364d42ab_0513d063-44ec-43cd-b45a-1c486101e7df.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140575",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643464",
                                name: "Aloo matar",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/4/a24343d2-dc14-498e-bc36-02f444bf4829_7eefedd7-d10c-4906-85dc-2390e64f4b87.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418164",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643453",
                                name: "Dal fry",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/5644e547-05bf-460d-9660-c484ed28f3af_33a1a716-8bc3-423a-b6af-2699062a237e.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 6000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140564",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643430",
                                name: "Paneer bhur ji",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/4bf9c096-25b1-494b-87ce-5fdc73fcfe9e_454b91fe-1c19-4310-88ec-c1e0275191b9.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 16900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872307",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413676",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 14900,
                                          id: "190413677",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140590",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643431",
                                name: "Dal tadka",
                                category: "Main Course",
                                description: "Half",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/caa72663-62f9-4a4b-a216-7ce0bfdf422e_d1065eee-7169-4ccf-bc83-9137e57ddb84.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872308",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413678",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 12900,
                                          id: "190413679",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140565",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643434",
                                name: "Paneer sadabahar",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/2/23/c534037d-85ee-4c46-9aec-c282894a1091_8b296433-97c3-4911-baf0-18a6659915b0.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 27500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140609",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643435",
                                name: "Daya special chefs special",
                                category: "Main Course",
                                inStock: 1,
                                isVeg: 1,
                                price: 34500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418178",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643436",
                                name: "Daya special paneer chefs special",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/28/8c37b9fb-b796-44ba-9bfb-feaea322a035_acc87183-1c74-45c0-94b8-4ccbeb810866.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 34500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418179",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643441",
                                name: "Paneer lababdar",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/232fb34f-2d91-46ec-bc21-69a5190ecbd2_6d48d5c9-d68a-402c-a9d5-c526deb0d12d.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 28500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140601",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643443",
                                name: "Shahi paneer",
                                category: "Main Course",
                                description: "Small",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/072aea60-0017-4027-b48d-4ccbbc77ce56_54603bec-e826-407d-ba0b-18632d69e6f8.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872314",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413690",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 23900,
                                          id: "190413691",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140622",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643444",
                                name: "Paneer tikka masala",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/2/23/7c0c3e6f-aeaf-45cf-b291-d58506bf3c8c_dc9dfce5-800d-4e85-aaf5-95e5deb6b373.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 28500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140611",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643445",
                                name: "Paneer kofta",
                                category: "Main Course",
                                imageId: "x8jjbzjhv8bbe5ttn1wm",
                                inStock: 1,
                                isVeg: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140600",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643446",
                                name: "Paneer punjabi",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/11/15/a1d4d7cb-0c3b-46e5-8fd3-dd43619b7f06_af2fa8cc-5adf-4f27-b8a1-40709f267fd3.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 28500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140608",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643447",
                                name: "Paneer ludhiana",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/3c0285e9-7cec-41de-a92d-02284c2e366a_08864e8d-23b2-4035-b6a7-d92134e49904.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 28500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418194",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643449",
                                name: "Malai kofta",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/24/3a27ddb0-d8af-402d-950a-a582bcab19ac_56a31120-a190-4a45-b397-f6714fb47fe3.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140577",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643450",
                                name: "Veg kofta",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/24/354f6e02-f1c4-4035-bbe5-8d44b9ba21e5_bf242d12-b33b-4185-88fd-0718c97668e7.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 25500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140631",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643451",
                                name: "Stuffed tomato",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/8/27/dfff4583-1def-46cb-aad0-bc20d28931c2_25472d45-7009-4e1c-a32f-f6ac390b17de.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418201",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643454",
                                name: "Chana paneer",
                                category: "Main Course",
                                description: "Small",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/30/a71cac53-97a4-4929-ac14-488333538bfa_1134d5f5-14f7-4421-a4cd-ba59c8e6cd5a.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872315",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413692",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 22900,
                                          id: "190413693",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140557",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643455",
                                name: "Chana masala",
                                category: "Main Course",
                                description: "Small",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/7/5/e7d08495-438b-4eb5-849f-e560b474e3db_9ed82893-a730-4875-8ae0-865b57d922ec.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 11500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872316",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413694",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 20000,
                                          id: "190413695",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140556",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643457",
                                name: "Paneer jaipuri",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/6bf108db-9a3a-4d96-aabd-641a2bd356b2_bb492dc8-1a93-444e-b8a1-274e65252873.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 28500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140599",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643458",
                                name: "Mushroom keema",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/ac775125-6927-4ed4-8ff1-ad2006864a56_dfd9952c-5915-4618-a58f-050f26dc8b96.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 29500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140587",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643460",
                                name: "Mix veg",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/28/9c9fe0f9-5857-4b38-a97b-c22daa2b2ccb_96c40110-8b41-47c7-879d-ea0fd88924bb.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872318",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413698",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 9500,
                                          id: "190413699",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418184",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643461",
                                name: "Bhindi masala",
                                category: "Main Course",
                                description: "Small",
                                imageId: "hq4qitqwo5papv8jmbm9",
                                inStock: 1,
                                isVeg: 1,
                                price: 9500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872319",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Small",
                                          default: 1,
                                          id: "190413700",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Large",
                                          price: 18500,
                                          id: "190413701",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418167",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643462",
                                name: "Aloo gobi",
                                category: "Main Course",
                                imageId: "b278abcac3bd87af1545ab2fa210a917",
                                inStock: 1,
                                isVeg: 1,
                                price: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418163",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643463",
                                name: "Aloo parwal",
                                category: "Main Course",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/fd916ccb-0957-4b09-ba01-4a0947925589_0c9fdd11-6e62-42d9-abca-5d1e7495759d.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418165",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/7/3/00a7a734-d79c-4439-a129-d9c7ef977793_566cea54-182a-48ee-9e22-4945b44636e2.jpg",
                        categoryId: "63484975",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Thali",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643417",
                                name: "Deluxe thali serves 1",
                                category: "Thali",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/27/a7600247-228d-4a61-89c2-c19af432ed47_ceee5809-fb40-4a4e-8bd4-3fcb9ddf227d.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 20000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261882366",
                                    groupName: "Plain Roti",
                                    choices: [
                                      {
                                        id: "142594220",
                                        name: "Plain roti",
                                        price: 1200,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882352",
                                    groupName: "Butter Roti",
                                    choices: [
                                      {
                                        id: "142594216",
                                        name: "Butter roti",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418180",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643419",
                                name: "Special lunch thali serves 1",
                                category: "Thali",
                                description:
                                  "Paneer ki sabji+dal fry+mix veg+raita+4 butter roti+chawal [quarter]+mitha+salad papad",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261882201",
                                    groupName: "Plain Roti",
                                    choices: [
                                      {
                                        id: "142594220",
                                        name: "Plain roti",
                                        price: 1200,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882185",
                                    groupName: "Butter Roti",
                                    choices: [
                                      {
                                        id: "142594216",
                                        name: "Butter roti",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418199",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643418",
                                name: "Special thali serves 1",
                                category: "Thali",
                                description:
                                  "Paneer ki sabji+dal fry+mix veg+raita+4 butter roti+jeera rice [quarter]+mitha+salad papad",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/1/19/d388d32c-7056-4160-9a55-f0b81436cd31_f75db58e-b904-4710-a4e3-14215521fc3f.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261882298",
                                    groupName: "Butter Roti",
                                    choices: [
                                      {
                                        id: "142594216",
                                        name: "Butter roti",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882317",
                                    groupName: "Plain Roti",
                                    choices: [
                                      {
                                        id: "142594220",
                                        name: "Plain roti",
                                        price: 1200,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418200",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643416",
                                name: "Normal thali serves 1",
                                category: "Thali",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/1/24/cd59fa86-eb67-48f5-b813-04f0ea7d3e19_99a63ea3-c0ae-4669-bbf8-e7bbfc0879f8.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 16000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261882238",
                                    groupName: "Butter Roti",
                                    choices: [
                                      {
                                        id: "142594216",
                                        name: "Butter roti",
                                        price: 1500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882254",
                                    groupName: "Plain Roti",
                                    choices: [
                                      {
                                        id: "142594220",
                                        name: "Plain roti",
                                        price: 1200,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418189",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/3/27/a7600247-228d-4a61-89c2-c19af432ed47_ceee5809-fb40-4a4e-8bd4-3fcb9ddf227d.jpg",
                        categoryId: "63484971",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Breakfast",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643501",
                                name: "2 paneer paratha",
                                category: "Breakfast",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/3/12/d156537d-a618-4e85-85c4-83423baf1017_09120b4c-2cb8-447f-890a-34e12b620f93.jpg_compressed",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418157",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643500",
                                name: "2 mixed paratha",
                                category: "Breakfast",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/27/60fe121c-f6d7-4d58-8811-db363fe7ef17_dfc7195c-49b9-4500-b36d-c06130e1878b.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261876370",
                                    groupName: "Do Pyaza",
                                    choices: [
                                      {
                                        id: "142594215",
                                        name: "Mushroom do pyaza",
                                        price: 12500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261876378",
                                    groupName: "Tadka",
                                    choices: [
                                      {
                                        id: "142594221",
                                        name: "Dal tadka",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261876354",
                                    groupName: "Kadhi Pakoda",
                                    choices: [
                                      {
                                        id: "142594211",
                                        name: "Kadhi pakoda",
                                        price: 8500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418155",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643504",
                                name: "Cheese sandwich [4 pieces]",
                                category: "Breakfast",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/24/d9eb22a9-cbcc-446f-b971-3213b1a669b9_93db51f6-a49c-4521-b2e6-b20b643ae941.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418175",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643496",
                                name: "Breakfast cheese sandwich [4 pieces]",
                                category: "Breakfast",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/24/d9eb22a9-cbcc-446f-b971-3213b1a669b9_93db51f6-a49c-4521-b2e6-b20b643ae941.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418168",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643497",
                                name: "2 aloo paratha",
                                category: "Breakfast",
                                imageId: "b9a9f8330c9aa3fc97019d5707768e08",
                                inStock: 1,
                                isVeg: 1,
                                price: 12000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418153",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643495",
                                name: "Veg sandwich [4 pieces]",
                                category: "Breakfast",
                                imageId: "k8czmxiyw06g2hs8c0vk",
                                inStock: 1,
                                isVeg: 1,
                                price: 8900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418213",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643499",
                                name: "2 onion paratha",
                                category: "Breakfast",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/20/26367af9-d58d-440b-a458-7640fef9ac85_90b3b9ba-7772-4097-8d5d-16b9a995fd46.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                finalPrice: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "18b4121d-513e-42ba-a2c9-13018c5d7c04",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "105418156",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643502",
                                name: "1 plain paratha",
                                category: "Breakfast",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/4/24/8df8db84-499e-4f65-b3bc-6321187c3836_a58dec47-d11d-4c65-97aa-31fbe27d753c.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                finalPrice: 3900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "531cbd89-2c03-45b2-a1fd-a60d4e0e82e3",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "105418152",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643498",
                                name: "2 gobi paratha",
                                category: "Breakfast",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/10/7647e945-44c2-4475-a00c-84968292429e_d61850ad-102e-44b3-80e7-d1ce975d6e12.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 12000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418154",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643503",
                                name: "Butter toast [4 pieces]",
                                category: "Breakfast",
                                imageId: "8054752f2cc0d2211a313c2cb046d32d",
                                inStock: 1,
                                isVeg: 1,
                                price: 7000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418171",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/3/12/d156537d-a618-4e85-85c4-83423baf1017_09120b4c-2cb8-447f-890a-34e12b620f93.jpg_compressed",
                        categoryId: "63484981",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Fried Rice",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643468",
                                name: "Veg chowmein",
                                category: "Fried Rice",
                                description:
                                  "Savor a delightful stir-fry of tender noodles tossed with fresh vegetables, creating a harmonious blend of flavors.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/12/6/27077847-a1b3-4daa-a57b-6f9d2b86023a_408ed2c9-2bad-4879-9841-0cbdb223c790.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                finalPrice: 2900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872322",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413706",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 7000,
                                          id: "190413707",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "2461257e-9ffb-42c1-a270-ce8194926fad",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "63140628",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643469",
                                name: "Veg manchurian [10 pieces]",
                                category: "Fried Rice",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/3/fd8662a2-43cc-4de0-9477-5c64851817a7_ef9eed55-39b5-410e-bead-c0e91de7ed78.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418210",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643470",
                                name: "Paneer chowmein",
                                category: "Fried Rice",
                                description:
                                  "Savor the delightful harmony of tender noodles and creamy cheese, tossed with vibrant vegetables for a satisfying treat.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/1/8814a6c5-5a62-4fbe-96c9-2d25d5fdacef_1de53696-5c7d-41b1-80e7-13f2fbef7937.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                finalPrice: 5900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872323",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413708",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 7500,
                                          id: "190413709",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                offerIds: [
                                  "e821f251-cea7-4099-9448-f5caa338c271",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "105418193",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643466",
                                name: "Veg fried rice",
                                category: "Fried Rice",
                                imageId: "9ac022714da3d5fd39070c1caffa9a61",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872321",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413704",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 9000,
                                          id: "190413705",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140630",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643467",
                                name: "Ginger fried rice",
                                category: "Fried Rice",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/28/f23fdb2e-28ef-4ee7-8546-4c5ac8719d54_af1f8412-43e9-4fc6-b407-c37fbec176c3.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 10500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418182",
                                menuFilterIds: ["bestseller", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/12/6/27077847-a1b3-4daa-a57b-6f9d2b86023a_408ed2c9-2bad-4879-9841-0cbdb223c790.jpg",
                        categoryId: "63484976",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Noodles",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643471",
                                name: "Veg hakka noodles",
                                category: "Noodles",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/06b31b20-7397-47c0-a94a-9444c4e5f9b9_8b3232fd-90e5-4850-8a7f-4a93e426b5e1.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 19500,
                                finalPrice: 14900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261876404",
                                    groupName: "Hot & Sour Soup",
                                    choices: [
                                      {
                                        id: "142594212",
                                        name: "Veg hot sour soup",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261876459",
                                    groupName: "Sweet Soup",
                                    choices: [
                                      {
                                        id: "142594223",
                                        name: "Veg sweet corn soup",
                                        price: 12500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261876446",
                                    groupName: "Garlic Soup",
                                    choices: [
                                      {
                                        id: "142594222",
                                        name: "Garlic soup",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261876471",
                                    groupName: "Cream Soup",
                                    choices: [
                                      {
                                        id: "142594224",
                                        name: "Cream tomato soup",
                                        price: 10500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261876419",
                                    groupName: "Manchow Soup",
                                    choices: [
                                      {
                                        id: "142594213",
                                        name: "Veg manchow soup",
                                        price: 11000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261876433",
                                    groupName: "Talumein Soup",
                                    choices: [
                                      {
                                        id: "142594214",
                                        name: "Talumein soup",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "dc97b1c2-23c9-43bb-9d77-ed3cb2254547",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "105418207",
                                menuFilterIds: ["BOLT", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643472",
                                name: "Paneer chilli",
                                category: "Noodles",
                                description:
                                  "Savor the delightful fusion of vibrant flavors and textures, where succulent cubes create a perfect harmony that's irresistible.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/78c34de0-0221-4574-9e59-6d24bb716d62_508c576c-c780-4029-84af-428561c495dd.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 20900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                parentId: "105418191",
                                menuFilterIds: ["BOLT", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643473",
                                name: "Mushroom chowmein",
                                category: "Noodles",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/24/f3c916fc-ec83-459f-864f-e476f58e8935_e1026cd2-76eb-4dc2-b0e3-1e1da8c56ed9.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872324",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Small",
                                          default: 1,
                                          id: "190413710",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Large",
                                          price: 19500,
                                          id: "190413711",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418186",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/7/26/06b31b20-7397-47c0-a94a-9444c4e5f9b9_8b3232fd-90e5-4850-8a7f-4a93e426b5e1.JPG",
                        categoryId: "63484977",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Biriyani",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643421",
                                name: "Paneer biryani",
                                category: "Biriyani",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/674693c1-a39a-4c1e-ae4e-d5e06e7a7943_5f1d7e1c-9f56-4e6f-933e-601c2254808b.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                finalPrice: 13900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872303",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413668",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 10000,
                                          id: "190413669",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "a4f073da-e3d0-4a96-9d99-3a89025f73c2",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "63140591",
                                menuFilterIds: ["BOLT", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643420",
                                name: "Veg biryani",
                                category: "Biriyani",
                                description:
                                  "A fragrant medley of rice and fresh vegetables, this dish is a delightful harmony of flavors and aromas, perfect for any time of day.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/542adbf1-fbdf-42a9-b0b7-bc0bc5c2efe8_1f9a90cb-54d2-46a3-b93b-186836e4a155.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 10500,
                                finalPrice: 7500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872302",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413666",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 9000,
                                          id: "190413667",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                offerTags: [
                                  {
                                    matchText: "SILD",
                                  },
                                ],
                                itemBadge: {},
                                badgesV2: {},
                                itemNudgeType: "FinalPrice",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.4",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#FFF0CD", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_low",
                                    ratingTextColor: "rating_low",
                                    ratingCountTextColor: "rating_low",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                cartContext: "quick_prep",
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                offerIds: [
                                  "18b4121d-513e-42ba-a2c9-13018c5d7c04",
                                ],
                                isNinetyninestoreItem: true,
                                parentId: "63140625",
                                menuFilterIds: ["BOLT", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/7/26/674693c1-a39a-4c1e-ae4e-d5e06e7a7943_5f1d7e1c-9f56-4e6f-933e-601c2254808b.JPG",
                        categoryId: "63484972",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Soups",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643488",
                                name: "Veg manchow soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/4301b96e-d510-4e40-a8f7-2cbb6cd3dc03_538a38d6-ec16-4965-a396-76271465127f.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId: "Low%20cal/Low%20cal%201_1.png",
                                  },
                                ],
                                parentId: "105418209",
                                menuFilterIds: [
                                  "EATRIGHT",
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643489",
                                name: "Veg sweet corn soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/366bc17e-8a27-41b5-a82d-00a22b550ca4_bff08823-93c9-47d7-81c0-72738c6569dc.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                imageBadges: [
                                  {
                                    imageId: "Low%20cal/Low%20cal%201_1.png",
                                  },
                                ],
                                parentId: "105418215",
                                menuFilterIds: ["EATRIGHT", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643486",
                                name: "Veg soup",
                                category: "Soups",
                                imageId: "l2uvi458prruhjiahzvj",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418214",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643487",
                                name: "Veg hot sour soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/21/7e299088-7d6f-4df2-afdb-3dea4d7672a6_cef9d71a-b09c-447e-9d82-aa19e1078d38.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418208",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643490",
                                name: "Tomato soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/7/16/68616f86-6c2e-4571-960a-c28cd38a3b24_aee70055-860d-4cec-a43a-7150e8dd8d6d.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418203",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643491",
                                name: "Cream tomato soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/de70640a-ab24-4598-a27b-9e5edfa93994_8dd2f919-954a-4c4e-993b-cf3d5a21e6d6.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 10500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418177",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643492",
                                name: "Mushroom soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/5/67f296f6-2b29-4867-907a-4bf1e3734b6d_cd67333b-4045-47a5-ac47-606f77400031.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418188",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643493",
                                name: "Talumein soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/99d63583-01ce-4b09-b4a2-e2b1e476648b_cc7c7b32-b142-4ec0-ad10-27a30da2e8aa.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418202",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643494",
                                name: "Garlic soup",
                                category: "Soups",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/10/2/d2d4ae24-1334-43db-ae2b-edd055514c47_f4c1220d-4d63-4c65-87d2-76ce3480bec7.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418181",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/7/26/4301b96e-d510-4e40-a8f7-2cbb6cd3dc03_538a38d6-ec16-4965-a396-76271465127f.JPG",
                        categoryId: "63484980",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Salad",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643429",
                                name: "Kadai paneer",
                                category: "Salad",
                                description: "Half",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/a41d2557-0927-44b9-b33e-3b713e7ff5fd_a9242b54-a20c-4c0f-b253-ae4a12a598b3.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872306",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413674",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 22900,
                                          id: "190413675",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                parentId: "105418183",
                                menuFilterIds: [
                                  "BOLT",
                                  "bestseller",
                                  "VEG",
                                  "offer",
                                ],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643428",
                                name: "Salad seasonal",
                                category: "Salad",
                                description: "Half",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/28/fcbc540a-6ef6-48a7-ab63-64b28774035b_f6964860-3df5-4877-b9e9-d2ca14abdc42.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 4900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872305",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Half",
                                          default: 1,
                                          id: "190413672",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Full",
                                          price: 1900,
                                          id: "190413673",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418198",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/7/26/a41d2557-0927-44b9-b33e-3b713e7ff5fd_a9242b54-a20c-4c0f-b253-ae4a12a598b3.JPG",
                        categoryId: "63484974",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Burgers",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643506",
                                name: "Paneer burger [1 piece]",
                                category: "Burgers",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/4/19/48c44f9d-8c30-47bb-bae8-d49829e31353_f368f16c-5527-436b-8e00-78e29ba0f4a6.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 9500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418190",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643505",
                                name: "Veg burger [1 piece]",
                                category: "Burgers",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/26/e370a774-754a-434f-9aa1-0c2cd11e2d5c_64890059-e38d-4962-acec-fd30be1502b6.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418204",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/4/19/48c44f9d-8c30-47bb-bae8-d49829e31353_f368f16c-5527-436b-8e00-78e29ba0f4a6.jpeg",
                        categoryId: "63484982",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Starters",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643475",
                                name: "Chilli potato",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/8/121775a2-75df-47f0-9904-e466fd2dcb70_5393d924-92a6-40b6-a79d-df946e6c9abd.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418176",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643474",
                                name: "Mushroom chilli",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/6/12/c537bfd4-92e5-4bac-8ddf-e24547d3ad6e_c1e64424-c157-46b4-b05c-4bec4b3d3d89.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418185",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643476",
                                name: "Paneer chopsuey",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/13/cff6de00-192a-4c19-8587-bf67dc4df4a9_3834374d-9e86-471d-b8e7-c5fa557e511b.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418192",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643477",
                                name: "Honey chilli potato",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/9/8/121775a2-75df-47f0-9904-e466fd2dcb70_5393d924-92a6-40b6-a79d-df946e6c9abd.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 18500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140571",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643478",
                                name: "American chopsuey",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/4/24/b8aa8566-28fe-4bf5-be10-c65a46c58ffb_db2b495e-78e8-4b46-aead-92e7726d2d99.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 60000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418166",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643479",
                                name: "Cheese manchurian [12 pieces]",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/12/1/9bfb97fd-f2a1-436c-b71a-cbe951bf5d40_eb932b0b-9ad7-4a8f-a317-f789503c9c10.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 24500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261882106",
                                    groupName: "Hakka Noodles",
                                    choices: [
                                      {
                                        id: "142594218",
                                        name: "Veg hakka noodles",
                                        price: 19500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882077",
                                    groupName: "Manchow Soup",
                                    choices: [
                                      {
                                        id: "142594213",
                                        name: "Veg manchow soup",
                                        price: 11000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882091",
                                    groupName: "Talumein Soup",
                                    choices: [
                                      {
                                        id: "142594214",
                                        name: "Talumein soup",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882132",
                                    groupName: "Sweet Soup",
                                    choices: [
                                      {
                                        id: "142594223",
                                        name: "Veg sweet corn soup",
                                        price: 12500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882062",
                                    groupName: "Hot & Sour Soup",
                                    choices: [
                                      {
                                        id: "142594212",
                                        name: "Veg hot sour soup",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882147",
                                    groupName: "Cream Soup",
                                    choices: [
                                      {
                                        id: "142594224",
                                        name: "Cream tomato soup",
                                        price: 10500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "261882119",
                                    groupName: "Garlic Soup",
                                    choices: [
                                      {
                                        id: "142594222",
                                        name: "Garlic soup",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418174",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643480",
                                name: "Veg chopsuey",
                                category: "Starters",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418205",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643481",
                                name: "Veg cocktail kebab [6 pieces]",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/2/23/5ed6f3bb-7d58-435f-b40d-7f2635ffea34_20993e1d-6499-4184-a0c6-2b1da8e9b90e.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418206",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643482",
                                name: "Cheese cocktail kebab [6 pieces]",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/10/5/527d7d3d-93ae-4ac8-a674-8f0393353363_d4cd85d4-1dc8-40da-b559-120a3a3ca811.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 15500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418172",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643483",
                                name: "Mushroom kadai kebab [full]",
                                category: "Starters",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/8/30/2c318797-1d0f-4ab9-8bbc-8f5a5c3fdf4e_c078d30a-f135-424b-9049-23ece140da7d.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 27500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418187",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/9/8/121775a2-75df-47f0-9904-e466fd2dcb70_5393d924-92a6-40b6-a79d-df946e6c9abd.jpeg",
                        categoryId: "63484978",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Snacks",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643422",
                                name: "Veg pakoda [6 pieces]",
                                category: "Snacks",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2026/1/20/c0e23ca8-a573-4858-acb5-fd7973de96e1_2f919e8e-8eca-49da-a275-893621082c60.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 8900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418211",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643423",
                                name: "Cheese finger",
                                category: "Snacks",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/10898feb-ba4f-4495-becb-e6a8f7f3905a_7f106bf8-5f10-47b1-b514-3452779d2fe9.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872304",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413670",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 16900,
                                          id: "190413671",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "261882411",
                                    groupName: "Cheese Sandwich",
                                    choices: [
                                      {
                                        id: "142594217",
                                        name: "Breakfast cheese sandwich [4 pieces]",
                                        price: 9900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "142594219",
                                        name: "Cheese sandwich [4 pieces]",
                                        price: 9500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418173",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643424",
                                name: "Paneer papdi [6 pieces]",
                                category: "Snacks",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418195",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643425",
                                name: "Potato finger chips",
                                category: "Snacks",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/7/26/3576dcbc-f45e-431f-bcba-351b9988d28a_59c38ab6-a922-4c7d-a0dc-27d5c00ceaef.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418197",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643426",
                                name: "Peanut masala",
                                category: "Snacks",
                                imageId: "jyfngvlwckdau3oz2mcn",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140615",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643427",
                                name: "Chana fry",
                                category: "Snacks",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/11/30/945bd308-1688-4172-ae7a-74685e0993a7_421b7e47-3e35-4760-8f24-b26600cd4459.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "63140555",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2026/1/20/c0e23ca8-a573-4858-acb5-fd7973de96e1_2f919e8e-8eca-49da-a275-893621082c60.jpeg",
                        categoryId: "63484973",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Roti",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643507",
                                name: "Plain roti",
                                category: "Roti",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/12/10/3bb3b680-3649-4bf5-a882-9e7ae70a1a61_f2ccad35-4d2f-4ae7-8cdc-e7b71358d0a8.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 1200,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.5",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                  ratingsPresentationConfig: {
                                    bgGradient: {
                                      colours: ["#D9EFEC", "#00FFFFFF"],
                                      gradientDirection:
                                        "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                    },
                                    ratingIconColor: "rating_medium",
                                    ratingTextColor: "rating_medium",
                                    ratingCountTextColor: "rating_medium",
                                    ratingFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    ratingCountFontName:
                                      "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  },
                                },
                                itemPriceStrikeOff: true,
                                isBolt: true,
                                boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                                parentId: "105418196",
                                menuFilterIds: ["BOLT", "VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643508",
                                name: "Butter roti",
                                category: "Roti",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/1/19742473-9209-43ea-af8d-b8d8801d436c_9673347d-4de4-45f3-8786-c875d4964055.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 1500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418170",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/12/10/3bb3b680-3649-4bf5-a882-9e7ae70a1a61_f2ccad35-4d2f-4ae7-8cdc-e7b71358d0a8.jpg",
                        categoryId: "63484983",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Break First",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643484",
                                name: "Veg sandwich [2 pieces]",
                                category: "Break First",
                                imageId: "k8czmxiyw06g2hs8c0vk",
                                inStock: 1,
                                isVeg: 1,
                                price: 4500,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872325",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413712",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 5000,
                                          id: "190413713",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418212",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643485",
                                name: "Break first 2 aloo paratha",
                                category: "Break First",
                                imageId: "b9a9f8330c9aa3fc97019d5707768e08",
                                inStock: 1,
                                isVeg: 1,
                                price: 12000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418169",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: "k8czmxiyw06g2hs8c0vk",
                        categoryId: "63484979",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Accompaniments",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643411",
                                name: "Accompaniments dry fried papad",
                                category: "Accompaniments",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/3/007b7064-df22-4b36-be6a-2d555d8c6f25_44610f51-905e-4c2c-8a48-5c985d9a08c6.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 2000,
                                variants: {
                                  variantGroups: [
                                    {
                                      groupId: "61872301",
                                      name: "Quantity",
                                      variations: [
                                        {
                                          name: "Serves 2",
                                          default: 1,
                                          id: "190413664",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Serves 4",
                                          price: 500,
                                          id: "190413665",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418159",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643412",
                                name: "Accompaniments masala fried papad",
                                category: "Accompaniments",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/3/20/292cb5f4-ce94-4860-9de5-7c34608105ce_fca1ca44-1550-467c-b3b1-417ba30d3d55.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 3000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418160",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643413",
                                name: "Accompaniments pineapple raita",
                                category: "Accompaniments",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/11/10/fb71206f-5987-4fe1-b0ec-dd7ada4d73ba_60523602-b2b1-457c-82ff-abac6c6b3895.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 16900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418162",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643414",
                                name: "Accompaniments mixed raita",
                                category: "Accompaniments",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2025/5/29/b07c1ab9-21aa-4bc2-8f63-412b07ae06ad_1e453f96-7f97-499e-8420-bad2e943f46e.jpg",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418161",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "174643415",
                                name: "Accompaniments boondi raita",
                                category: "Accompaniments",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/9/17/e8e8bba1-0539-46ce-b0fb-ea05ce6e138f_4061c0b5-fccc-4b9d-be1a-8c455f0d7ae1.jpeg",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                                itemPriceStrikeOff: true,
                                parentId: "105418158",
                                menuFilterIds: ["VEG", "offer"],
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2024/6/3/007b7064-df22-4b36-be6a-2d555d8c6f25_44610f51-905e-4c2c-8a48-5c985d9a08c6.jpeg",
                        categoryId: "63484970",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                        title: "Large Order",
                        categories: [
                          {
                            title: "Biriyani",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "190557849",
                                    name: "Veg biryani (Pack of 4) (264)                                             ",
                                    category: "Large Order",
                                    description: "Veg biryani (Pack of 4)",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2026/2/16/bff84527-8a5a-418b-a764-48b9622da87b_a9f2eabe-0131-4158-ae9c-35b84ebd92a7.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 39900,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "115933523",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "190557852",
                                    name: "Paneer biryani (Pack of 4) (119)                                             ",
                                    category: "Large Order",
                                    description: "Paneer biryani (Pack of 4)",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2024/4/14/6e76868a-f482-4224-9afe-f36adecb14ad_8076f2e0-b667-428b-8639-0052f658e1a9.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 55100,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "115933522",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                            subtitleSuffix: {},
                            categoryId: "70392188",
                          },
                          {
                            title: "Starters",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "190535951",
                                    name: "Cheese cocktail kebab (Pack of 2)                                ",
                                    category: "Large Order",
                                    description:
                                      "Cheese cocktail kebab (Pack of 2)",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/10/5/527d7d3d-93ae-4ac8-a674-8f0393353363_d4cd85d4-1dc8-40da-b559-120a3a3ca811.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 29450,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "115933519",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "190535964",
                                    name: "Cheese manchurian (Pack of 2)                                ",
                                    category: "Large Order",
                                    description:
                                      "Cheese manchurian (Pack of 2)",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2025/12/1/9bfb97fd-f2a1-436c-b71a-cbe951bf5d40_eb932b0b-9ad7-4a8f-a317-f789503c9c10.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 46550,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "115933520",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "190535973",
                                    name: "Mushroom kadai kebab (Pack of 2)                                ",
                                    category: "Large Order",
                                    description:
                                      "Mushroom kadai kebab (Pack of 2)",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2024/8/30/2c318797-1d0f-4ab9-8bbc-8f5a5c3fdf4e_c078d30a-f135-424b-9049-23ece140da7d.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 52250,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "115933521",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "190535987",
                                    name: "Veg cocktail kebab (Pack of 2) (2)                                ",
                                    category: "Large Order",
                                    description:
                                      "Veg cocktail kebab (Pack of 2)",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2026/2/23/5ed6f3bb-7d58-435f-b40d-7f2635ffea34_20993e1d-6499-4184-a0c6-2b1da8e9b90e.jpg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27550,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "115933524",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "190536002",
                                    name: "Veg manchurian (Pack of 2) (230)                                ",
                                    category: "Large Order",
                                    description: "Veg manchurian (Pack of 2)",
                                    imageId:
                                      "FOOD_CATALOG/IMAGES/CMS/2024/8/1/7c5418b8-5473-4dc4-b792-714f41b48ec0_bb6630c8-6578-4afa-a6b0-171c3021d4a8.jpeg",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 33250,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                    itemPriceStrikeOff: true,
                                    parentId: "115933525",
                                    menuFilterIds: ["VEG", "offer"],
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                            subtitleSuffix: {},
                            categoryId: "70388040",
                          },
                        ],
                        image:
                          "FOOD_CATALOG/IMAGES/CMS/2025/10/5/527d7d3d-93ae-4ac8-a674-8f0393353363_d4cd85d4-1dc8-40da-b559-120a3a3ca811.jpg",
                        categoryId: "70387669",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        type: "FSSAI",
                        imageId: "fssai_final_edss9i",
                        text: ["License No. 12718033000076"],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        name: "Daya Restaurant",
                        area: "Maharajganj New",
                        completeAddress:
                          "Shop No : Shop no 0 , Floor :  , PHARENDA ROAD MAHARAJGANJ ,Maharajganj Tahsil , ",
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
    tid: "3214f48c-7e33-4baa-9da6-964abd0ccbb6",
    sid: "q3rcd3f5493-c08b-4f0f-9d1e-fe799beec",
    deviceId: "e14bb5e5-86c1-466a-3571-2cbe03d25446",
    csrfToken: "bwXTZQQkdYPb-O044_2vmYK_u_K8Fi6ohrkDd5X8",
  });
});

const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`server runningbon port ${PORT}`);
});
