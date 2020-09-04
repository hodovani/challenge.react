type APIFetchName = (name: string) => Promise<IItem>;

const unknown = 'unknown'

export const fetchName: APIFetchName = async (name: string) => {
  const nameDetails: IItem = await new Promise(async resolve => {
    // todo: make requests parallel
    const nationResponse = await fetch(`https://api.nationalize.io/?name=${name}`);
    const nationResponseJson = await nationResponse.json();
    const nation = nationResponseJson.country?.[0]?.country_id || unknown
    
    const genderResponse = await fetch(`https://api.genderize.io/?name=${name}`);
    const genderResponseJson = await genderResponse.json();
    const gender = genderResponseJson.gender ||unknown

    return resolve({
      name,
      nation,
      gender
    });
  });

  return nameDetails;
};
