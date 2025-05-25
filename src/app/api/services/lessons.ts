import apiClient, {_cleanParams, _route, type PaginationResponse} from "@/framework/api/BaseApiClient";;

export enum LessonsApi {
	// index = "/subjects/:subjectId/lessons",
	// create = "/subjects/:subjectId/lessons", 
	index = "/lessons",
	create = "/lessons", 
	show = "/lessons/:id",
	update = "/lessons/:id",
	delete = "/lessons/:subjectId/:id", // @TODO
}

export interface CreateRequest extends Partial<Lesson>{ 
} 

const get = (params: {[key:string]:unknown}) => apiClient.get<PaginationResponse<Lesson>>({ url:LessonsApi.index, params: _cleanParams(params), headers: {'ngrok-skip-browser-warning': 'true'} });
const show = (id: number|string) => apiClient.get<Lesson>({ url: _route(LessonsApi.show, {id}) });
const create = (data: CreateRequest) => apiClient.post<Lesson>({ url: LessonsApi.create, data });
const update = (id: number|string, data: CreateRequest) => apiClient.put({ url: _route(LessonsApi.update, {id}), data });
const destroy = (subjectId: number|string, id: number|string) => apiClient.delete({ url: _route(LessonsApi.delete, {id, subjectId}) });

export default {
	get,
	show,
	create,
	update,
	destroy,
};

//
//
// TYPES
//
//

export interface Lesson {
	id: string
	subjectId: string | undefined
	title: string
	type: string
	url: string
	description: string|undefined
	subjectName: string|undefined
    programName?: string;
  }
  
// export interface Lesson {
//     id: string;
//     subjectId: string;
//     title: string;
//     type: 'video' | 'audio' | 'pdf' | 'docx' | 'embedded' | 'unknown';
//     url: string;
//     description?: string;
//     subjectName?: string;
//     programName?: string;
// }