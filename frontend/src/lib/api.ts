type APIResponse<T> = {
  success: Boolean;
  message: string;
  responseObject: T;
  statusCode: number;
};

export const api = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<APIResponse<T>> => {
  const token = localStorage.getItem('authToken');

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}${endpoint}`,
    {
      ...options,
      headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  );

  if (!res.ok) {
    const error = await res.json();

    throw new Error(error.message || 'Something went wrong');
  }

  return res.json();
};
