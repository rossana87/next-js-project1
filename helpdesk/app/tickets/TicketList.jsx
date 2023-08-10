
async function getTickets() {
  try {
    const res = await fetch('http://127.0.0.1:4000/tickets');
    if (!res.ok) {
      throw new Error('Failed to fetch tickets')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching tickets:', error)
    return []
  }
}


export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets!</p>
      )}
    </>
  )
}