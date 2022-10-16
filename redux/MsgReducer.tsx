type MassageArry = {id:number, user:string, time: string, text: string, isMe:boolean, isReply?: number}[]
const InitialMsgs: MassageArry = [
    { id: 0, user: 'پویان', time: '11:00 PM', text: 'این یک پیام تستی است', isMe: true },
    { id: 1, user: 'علی', time: '12:00 PM', text: 'این یک پیام تستی است', isMe: false },
    { id: 2, user: 'پویان', time: '2:00 PM', text: 'این یک پیام تستی است', isMe: true },
    { id: 3, user: 'احمد', time: '11:00 PM', text: 'این یک پیام تستی است', isMe: false, isReply: 1 },
    { id: 4, user: 'پویان', time: '11:00 AM', text: 'این یک پیام تستی است', isMe: true, isReply: 3 },
    { id: 5, user: 'امین', time: '11:00 AM', text: 'این یک پیام تستی است', isMe: true },
    { id: 6, user: 'امین', time: '11:00 AM', text: 'این یک پیام تستی است', isMe: true },
  ]
  
const MsgReducer = (state = InitialMsgs, action:{type:string, payload:any}):object => {
	switch (action.type) {
		case 'ADD_MSG':
			state = [...state, {id:7, user:action.payload.user, time:action.payload.time, text: action.payload.text, isMe:action.payload.isMe, isReply:action.payload.isReply}]
			return state;
		case 'EDIT_MSG':
			break;
		case 'DELETE_MSG':
			break;
		default:
			return state;
	}
}
  
export default MsgReducer