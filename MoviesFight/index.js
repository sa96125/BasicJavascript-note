///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 어느프로젝트에서나 작동이 가능하도록 모듈화시킴
// 1. root
// 2. renderOption
// 3. inpuValue
// 4. fetchData
// 5. optionSelect
// 쉽게말해서 Reusable한 코드를 선별해서 위젯을 실행하고 싶을때 거기에 사용할때 환경설정처럼 사용할 수 있게 변경한 것! 
createAutoComplete({
  // 어디에 붙일 것인지(내가 원하는 태그를 지정하는 부분)
  root: document.querySelector('.autocomplete'),

  // 검색시 각 영화가 보여지는 부분인데 무엇을 나타낼 것인가? 객체의 정보
  renderOption(movie) {
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return `
      <img src="${imgSrc}" />
      ${movie.Title} (${movie.Year})
    `;
  },

  // 각 영화를 인자로 넘겨주는 부분인데 함수명을 헷갈리지 않게 새로운 정보에 맞게 변경하는 부분(굳이... 신경 노노)
  onOptionSelect(movie) {
    onMovieSelect(movie);
  },

  // 이것도 fetch된 데이터의 키, 프로펄티에 따라서 다른 부분이기때문에 정보에 맞게 변경!
  inputValue(movie) {
    return movie.Title;
  },

  // API에 따른 axios request 인자를 설정하는 부분!
  async fetchData(searchTerm) {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'd9835cc5',
        s: searchTerm
      }
    });

    if (response.data.Error) {
      return [];
    }

    return response.data.Search;
  }
});

const onMovieSelect = async movie => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9835cc5',
      i: movie.imdbID
    }
  });

  document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};

const movieTemplate = movieDetail => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};
