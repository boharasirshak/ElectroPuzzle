import BACKEND_URI from "../../data.js";

export default async function fetchProductData (params, setPedalData, setLoading, setError) {
    const url = `${BACKEND_URI}/graphql`;
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const query = `query GetPedalData($slug: String!){
      pedals(filters: {slug: {eq: $slug}}){
        data{
          attributes{
            name
            based_on
            price
            stock
            description
            image{
              data{
                attributes{
                  name
                  url
                  alternativeText
                }
              }
            }
            additional_images{
              data{
                attributes{
                  name
                  url
                  alternativeText
                }
              }
            }
            peculiarity
            management
            characteristics
            slug
            videos{
              data{
                attributes{
                  name
                  url
                  alternativeText
                  previewUrl
                }
              }
            }
            categories{
              data{
                attributes{
                  type
                  value
                  description
                }
              }
            }
            youtube_links{
              data{
                attributes{
                  link
                  embed_code
                  preview_image{
                    data{
                      attributes{
                        name
                        alternativeText
                        url
                        previewUrl
                      }
                    }
                  }
                }
              }
            }
            avito_link
          }
        }
      }
    }`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          query: query,
          variables: {slug: params.slug},
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPedalData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
};