const token = 'DT50MM6-QDBMZM8-M56BYYT-E98HKAE'
const URL = 'https://api.poiskkino.dev';

export const getMovieById = async (id: number) => {
  const response = await fetch(`${URL}/v1.4/movie/${id}`, {
    headers: {
      'X-API-KEY': token,
    },
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error('Не удалось загрузить фильмы.');
  }
  return response.json()
}

export const getMovieByName = async (name: string) => {
  const response = await fetch(`${URL}/v1.4/movie/search?query=${name}`, {
    headers: {
      'X-API-KEY': token,
    },
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error('Не удалось загрузить фильмы.');
  }
  return response.json()
}

export const getPageMovies = async (page: number = 1, limit: number = 20) => {
  const query = `${URL}/v1.4/movie?page=${page}&limit=${limit}&sortField=votes.filmCritics&sortType=-1`;

  const response = await fetch(query, {
      headers: {
        'X-API-KEY': token,
        'accept': 'application/json'
      },
      cache: 'no-store'
    }
  )
  if (!response.ok) {
    throw new Error('Не удалось загрузить фильмы.');
  }
  const data = await response.json();
  return data;
}

export const getTopMovies = async (limit: number = 20) => {
  const response = await fetch(
    `${URL}/v1.4/movie?page=1&limit=${limit}&sortField=votes.kp&sortType=-1`,
    {
      headers: {
        'X-API-KEY': token,
        'accept': 'application/json'
      },
      cache: 'no-store'
    }
  );

  if (!response.ok) {
    throw new Error('Не удалось загрузить топ фильмов.');
  }

  const data = await response.json();
  return data;
}


export const getGenres = async () => {
  const response = await fetch(`${URL}/v1/movie/possible-values-by-field?field=genres.name`, {
    headers: {
      'X-API-KEY': token,
    },
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error('Не удалось загрузить фильмы.');
  }
  return response.json()
}

export const getMoviesByGenre = async (genre: string) => {
  const query = `${URL}/v1.5/movie?genres.name=${genre}`;

  const response = await fetch(query, {
      headers: {
        'X-API-KEY': token,
        'accept': 'application/json'
      },
      cache: 'no-store'
    }
  )
  if (!response.ok) {
    throw new Error('Не удалось загрузить фильмы.');
  }
  const data = await response.json();
  return data.docs;
}
