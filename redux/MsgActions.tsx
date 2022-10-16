type Massage = (user:string, time: string, text: string, isMe:boolean, isReply?: number) => {type:string, payload:object}
export const addMsg:Massage = (user, time, text, isMe, isReply?) => {
	return {type:'ADD_MSG',payload:{user, time, text, isMe, isReply}}
}

export const remove = (id:number):object => { //possibly id goes here!
	return { type: 'DELETE_MSG', id: id }
}