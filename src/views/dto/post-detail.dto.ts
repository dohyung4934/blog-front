export interface PostDetailDto {
  id: string
  title: string
  contents: string
}

export interface PostDetailResponse {
  postDetail: PostDetailDto
}
