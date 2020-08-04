class ApiSeedsMusic{
    constructor(ApiKey){
        this.ApiKey = ApiKey;
    }

    async sendRequest(artista, cancion){
        const Request = await fetch(`https://orion.apiseeds.com/api/music/lyric/${artista}/${cancion}?apikey=${this.ApiKey}`)
        .then(Response => Response.json())
        .catch(err => err)

        return Request;
    }
}
const apiKeySeeds = "t8D3egNDudmzwuGHg068x6JCdyt0ciWVM7TqOtwZ5IFPHXwtQL3TynETZve39pPK";
const apiSeedsMusic = new ApiSeedsMusic(apiKeySeeds);

export {apiSeedsMusic};