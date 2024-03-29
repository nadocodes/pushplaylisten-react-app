import React from "react";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import "./PlaylistList.css";

export default class PlaylistList extends React.Component {
    render() {
        return (
            <div className="PlaylistList">
                <h2>Your Playlists</h2>
                <>
                    {this.props.playlists && this.props.playlists.map((playlist) => {
                        return (
                            <PlaylistItem
                            name={playlist.playlistName}
                            cover={playlist.playlistImage}
                            key={playlist.playlistId}
                            onClick={() => this.props.selectPlaylist(playlist.playlistId, playlist.playlistName)}
                            />
                        );
                    })}
                </>
            </div>
        );
    }
}