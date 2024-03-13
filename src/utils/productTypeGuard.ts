import {
  AddFirstProductResponse,
  AddProductResponse,
} from "@/types/ResponseTypes";

export function isFirstProductResponse(
  responseData: AddFirstProductResponse | AddProductResponse
): responseData is AddFirstProductResponse {
  return "newDay" in responseData;
}
