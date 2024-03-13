import { AddFirstProductResponse, AddProductResponse } from "@/types/Dairy";

export function isFirstProductResponse(
  responseData: AddFirstProductResponse | AddProductResponse
): responseData is AddFirstProductResponse {
  return "newDay" in responseData;
}
