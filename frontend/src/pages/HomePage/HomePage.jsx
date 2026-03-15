import './HomePage.css'

export default function HomePage() {
    return (
        <>
            <section className="main-section">
                <h1 className='headding'>
                    Motel, Your Gateway TO Serenity
                </h1>
                <form>
                    <table>
                        <th>Check Availability</th>
                        <tr>
                            <td>
                                <label htmlFor="">Check-In</label>
                            </td>
                            <td>
                                <input type="date" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Chech-Out</label>
                            </td>
                            <td>
                                <input type="date" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Rooms</label>
                            </td>
                            <td>
                                <input type="number" />
                            </td>
                        </tr><tr>
                            <td>
                                <label htmlFor="">Guests</label>
                            </td>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type='submit'>Check Availability</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </section>
        </>
    )
}